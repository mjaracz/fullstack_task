import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {useStyle} from './styled';

export const Home: FC = () => {
  const {home, homeText, tryToButton, textDistinction} = useStyle();
  return (
    <div className={home}>
      <p className={homeText}>Example of Sign In Application.</p>
      <p className={homeText}><span className={textDistinction}>Authorization</span> based for <span className={textDistinction}>JWT </span>token.</p>
      <p className={homeText}>Feel free to <span className={textDistinction}>try login</span> with fake userdata.</p>

      <Button className={tryToButton} variant='contained' color='primary' component={Link} to='/sign-in'>
        Just Try To
      </Button>
    </div>
  )
}