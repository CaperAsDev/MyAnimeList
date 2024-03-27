import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { BsPlusCircle } from 'react-icons/bs'

import { GetAllUserListsApi, AddItemToListApi } from '../../../apiConnection'

import { setUserList, updateUserList } from '../../../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import getFormValues from '../../../utils/getFormValues'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'

function AddToListForm ({ toCloseModal }) {
  const dispatch = useDispatch()

  const animeId = useParams().id

  const { token, data } = useSelector(({ user }) => user.info)
  const userLists = useSelector(({ user }) => user.custom.lists)

  const [addListItemResponse, addListItemStatus, addListItemFetch] = AddItemToListApi(animeId)
  const [userListsRes, userListsStatus, userListsFetch] = GetAllUserListsApi(data.id)

  useEffect(() => {
    if (!userLists.setted) {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      userListsFetch('', {}, config)
    }
  }, [])

  useEffect(() => {
    if (userListsStatus.success) {
      dispatch(setUserList(userListsRes))
    }
  }, [userListsStatus])

  useEffect(() => {
    if (addListItemStatus.success) {
      toast.success('Item agregado con exito')
      dispatch(updateUserList(addListItemResponse))
      toCloseModal(false)
    }
  }, [addListItemResponse])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { data } = getFormValues(e.target)

    if (data.selectedList === '') {
      toast.error('Selecciona una lista')
      return
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    addListItemFetch(`?listId=${data.selectedList}`, {}, config)
  }

  return (
    <div>
      <Toaster />
      <form className='addToList-form' onSubmit={handleSubmit}>
        <label className='addToList-form__label'>
          <span>¿A que lista quieres agregarlo?</span>
          <select name='selectedList' >
            <option value=''>-/ Selecciona una Lista \-</option>
            {userLists.array.map(list => {
              const alreadyInList = list.animes.some((anime) => anime.id === animeId)
              return (
                <option
                  key={list.id}
                  className={alreadyInList ? 'inList' : ''}
                  value={list.id}
                  disabled= {alreadyInList}
                >
                  {alreadyInList ? '✅-' : ''}
                  {capitalizeFirstLetter(list.title)}
                </option>
              )
            })}

          </select>
        </label>
        <button
          className="button filled"
          type='submit'
        >
          <BsPlusCircle/>
          Agregar a la lista
        </button>
      </form>
    </div>
  )
}

export default AddToListForm
