import React, { createContext, useState } from 'react'

export const UserSignUpContext = createContext({})

export function UserSignUpProvider ({ children }) {
  const [name, setName] = useState(null)
  const [mail, setMail] = useState(null)
  const [password, setPassword] = useState(null)
  const [nickname, setNickname] = useState(null)
  const [birthday, setBirthday] = useState({})
  const [profileImg, setProfileImg] = useState(null)

  const values = {
    name,
    setName,
    mail,
    setMail,
    password,
    setPassword,
    nickname,
    setNickname,
    birthday,
    setBirthday,
    profileImg,
    setProfileImg
  }
  return (
    <UserSignUpContext.Provider value={values}>
      {children}
    </UserSignUpContext.Provider>
  )
}
