import React, { useEffect, useState } from 'react'
import Modal from '../../atoms/modal'
import ModalListContainer from '../modalListContainer'
import ProfileStatusListThumbnail from '../../atoms/profileStatusListThumbnail'

import { useSelector } from 'react-redux'

import { UserAnimesAPI } from '../../../apiConnection'

export default function ProfileStatusList ({ userId }) {
  const { token } = useSelector(({ user }) => user.info)
  const [listSelected, setListSelected] = useState(null)
  const [userAnimes, setUserAnimes] = useState(null)

  const [listViewModalOpen, setListViewModalOpen] = useState(false)

  const [userAnimesResponse, userAnimesStatus, userAnimesFetch] = UserAnimesAPI(userId)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    userAnimesFetch('', {}, config)
  }, [])

  useEffect(() => {
    if (userAnimesStatus.success) {
      const statusLists = userAnimesResponse.reduce((acc, addon) => {
        if (addon.status) {
          const objIndex = acc.findIndex(obj => obj.title.toLowerCase() === addon.status.toLowerCase())
          acc[objIndex].animes.push(addon)
        }
        return [...acc]
      }, [
        { title: 'Viendo', animes: [] },
        { title: 'Visto', animes: [] },
        { title: 'Por ver', animes: [] }
      ])
      setUserAnimes(statusLists)
    }
  }, [userAnimesResponse])

  const clickHandler = (e) => {
    e.preventDefault()
    const listClicked = e.currentTarget.dataset.list
    const listToRender = userAnimes.find((list) => list.title === listClicked)
    setListSelected(listToRender)
    setListViewModalOpen(true)
  }

  return (
    <section className='profile__status-bar'>
      {listViewModalOpen && (
        <Modal toClose={setListViewModalOpen}>
          <ModalListContainer list={listSelected} />
        </Modal>
      )}
      {userAnimes
        ? (userAnimes.map((item) => (
          <ProfileStatusListThumbnail
            key={item.title}
            status={null}
            list={item}
            clickhandler={clickHandler}
          />
        )))
        : (<p>...Cargando</p>)
      }
    </section>
  )
}
