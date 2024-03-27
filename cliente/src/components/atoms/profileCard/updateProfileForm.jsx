import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateUserInfo } from '../../../slices/userSlice'

import InputFile from '../../molecules/inputFile'
import getFormValues from '../../../utils/getFormValues'

import { UpdateUserDataAPI } from '../../../apiConnection'

function UpdateProfileForm ({ editControl }) {
  const dispatch = useDispatch()
  const { token, data: userData } = useSelector(({ user }) => user.info)

  const [newImage, setNewImage] = useState(userData.profilePicture[0].url || null)

  const [updateUserResponse, updateUserStatus, updateUserFetch] = UpdateUserDataAPI(userData.id)

  useEffect(() => {
    if (updateUserStatus.success) {
      dispatch(updateUserInfo(updateUserResponse))
      const userToLocal = { ...updateUserResponse, loginDate: userData.loginDate, token }
      localStorage.setItem('user', JSON.stringify(userToLocal))
    }
  }, [updateUserResponse])

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    const { data: formValues } = getFormValues(e.target)

    const formData = new FormData()
    formData.append('profilePicture', newImage)

    if (formValues.name !== userData.name && formValues.name) {
      formData.append('name', formValues.name)
    }
    if (formValues.biografy !== userData.biografy && formValues.biografy) {
      formData.append('biografy', formValues.biografy)
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    }

    updateUserFetch('', formData, config)

    e.target.reset()
    editControl(false)
  }

  return (
    <form
      onSubmit={handleUpdateSubmit}
      className='profile-card__update-form'
    >
      <InputFile status={[newImage, setNewImage]}/>
      <label className='profile-card__name-input'>
                  Nuevo nombre
        <input
          name='name'
          type="text"
        />
      </label>
      <label className='profile-card__biography-input'>
                  Biografía
        <textarea
          name="biografy"
          cols="35" rows="5"
          maxLength='140'
        ></textarea>
      </label>
      <button className='profile-card__submit-update-btn' type="submit">Realizar Cambios</button>
    </form>
  )
}

export default UpdateProfileForm
