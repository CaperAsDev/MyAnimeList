import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { BsPlusCircle } from 'react-icons/bs'

import getFormValues from '../../../utils/getFormValues'

import { useSelector, useDispatch } from 'react-redux'
import { setUserList } from '../../../slices/userSlice'

import { CreateListApi, GetAllUserListsApi } from '../../../apiConnection'

import ProfileListNav from '../../molecules/profileListNav'
import Modal from '../../atoms/modal'
import Button from '../../atoms/button'
import CreateListForm from './createListForm'
import ProfileListContent from '../../molecules/profileListContent'

function ProfileList ({ userId, canEdit }) {
  const dispatch = useDispatch()

  const { token } = useSelector(({ user }) => user.info)
  const userLists = useSelector(({ user }) => user.custom.lists)

  const [searchParams, setSearchParams] = useSearchParams()
  const [createListModalOpen, setCreateListModalOpen] = useState(false)

  const [createListResponse, createListStatus, createListFetch] = CreateListApi()
  const [getAllListsResponse, getAllListsStatus, getAllListsFetch] = GetAllUserListsApi(userId)

  useEffect(() => {
    const menus = ['lists', 'reviews']
    if (!menus.includes(searchParams.get('menu'))) {
      setSearchParams({ menu: 'lists' })
    }

    if (!userLists.setted) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      getAllListsFetch('', {}, config)
    }
    // obtener todas la reviews
  }, [])

  useEffect(() => {
    if (getAllListsStatus.success) {
      dispatch(setUserList(getAllListsResponse))
    }
  }, [getAllListsResponse])

  useEffect(() => {
    if (createListStatus.success) {
      dispatch(setUserList(createListResponse))
      toast.success('Lista Creada')
    }
  }, [createListStatus])

  const createListHandler = (e) => {
    e.preventDefault()
    const { data } = getFormValues(e.target)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    createListFetch('', JSON.stringify(data), config)
    setCreateListModalOpen(false)
  }

  return (
    <section className='profile-lists'>
      {createListModalOpen && (
        <Modal toClose={setCreateListModalOpen}>
          <CreateListForm
            createListHandler ={createListHandler} />
        </Modal>
      )}
      <Toaster />
      <ProfileListNav>
        {searchParams.get('menu') === 'lists' && userLists.array.length > 0 && (
          <Button
            text={'Crear nueva lista'}
            type='filled'
            clickHandler={() => setCreateListModalOpen(true)}>
            <BsPlusCircle />
          </Button>
        )}
      </ProfileListNav>
      <ProfileListContent>
        {searchParams.get('menu') === 'lists' && userLists.array.length === 0 && (
          <Button
            text={'Crear nueva lista'}
            type='filled'
            clickHandler={() => setCreateListModalOpen(true)}>
            <BsPlusCircle />
          </Button>
        )}
      </ProfileListContent>
    </section>
  )
}

export default ProfileList
