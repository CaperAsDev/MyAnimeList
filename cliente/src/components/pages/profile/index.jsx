import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileCard from '../../atoms/profileCard'
import ProfileList from '../../organisms/profileList'

import { useSelector } from 'react-redux'

import ProfileStatusList from '../../molecules/profileStatusList'

function Profile () {
  const user = useSelector(({ user }) => user.info)
  const { id } = useParams()
  const canEdit = user.data.id === id

  return (
    <main className='profile'>
      {user.setted
        ? (<>
          <ProfileCard userId={id} canEdit={canEdit} />
          <section className="profile__right">
            <ProfileStatusList userId={id} />
            <ProfileList userId={id} canEdit={canEdit} />
          </section>
        </>
        )
        : (<p>...Cargando</p>)
      }
    </main>
  )
}

export default Profile
