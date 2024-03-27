import React from 'react'
function ProfilePic ({ user, size }) {
  return (
    <div className="profile-pic">
      <picture className={`profile-pic__image-container image image--${size}`}>
        <img className='profile-pic__image' src={user.userImage} alt={`Profile ficture of ${user.userName}`} />
      </picture>
      <span className='profile-pic__name'>{`@${user.userName}`}</span>
    </div>
  )
}
export default ProfilePic
