import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useStyle} from './styled';
import {PageNotFound} from '../pageNotFound';
import {RememberPass} from '../rememberPass';
import {SignIn} from '../signIn';
import {Home} from '../home';
import {Unauthorized} from '../unauthorized';
import {Profile} from '../profile';

export const Routing: FC = () => {
  const {root} = useStyle();
  return (
    <BrowserRouter>
      <div className={root}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/remember' component={RememberPass}/>
          <Route path='/unauthorized' component={Unauthorized}/>
          <Route path='/profile' component={Profile}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}