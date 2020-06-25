import React, { FC } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { useStyle } from './styled'
import { useProfile } from './hooks/useProfile'
import { ButtonHome } from '../buttons'

export const Profile: FC = () => {
  const { userProfile } = useProfile()
  const { profile, profileText } = useStyle()
  console.log(userProfile)
  if (userProfile.error === 'Unauthorized') {
    return <Redirect to="unauthorized" />
  }
  return userProfile.loading ? (
    <CircularProgress color="secondary" size={114} />
  ) : (
    <div className={profile}>
      <p className={profileText}>
        Profile <b style={{ color: '#bc36ff' }}>{userProfile.profile.username}</b>, with id <b style={{ color: '#bc36ff' }}>{userProfile.profile.userId}</b>
      </p>
      <ButtonHome label="Products" path="/products" />
      <ButtonHome label="sign in again" path="/sign-in" />
    </div>
  )
}
