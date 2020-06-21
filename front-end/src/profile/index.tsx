import React, {FC} from 'react';
import {Button, CircularProgress} from '@material-ui/core';
import {useStyle} from './styled';
import {useProfile} from './hooks/useProfile';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export const Profile: FC = () => {
  const {userProfile} = useProfile()
  const {profile, profileBackButton, profileText} = useStyle();

  if (userProfile.error === 'Unauthorized') {
    return <Redirect to='unauthorized' />
  }
  return (userProfile.loading)
    ? <CircularProgress color='secondary' size={114}/>
    : (
      <div className={profile}>
        <p className={profileText}>Profile <b style={{color: '#bc36ff'}}>{userProfile.profile.username}</b>, with id <b style={{color: '#bc36ff'}}>{userProfile.profile.userId}</b></p>
        <Button className={profileBackButton} variant='contained' color='primary' component={Link} to='/sign-in'>back to previous page</Button>
      </div>
    )
}