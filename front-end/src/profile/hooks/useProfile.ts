import {useEffect} from 'react';
import {clearProfile} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/types';

export const useProfile = () => {
  const {signIn: {jwtToken}, userProfile} = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  console.log(jwtToken);
  useEffect(() => {
    dispatch({type: 'GET_USER_PROFILE', token: jwtToken})
    return () => dispatch(clearProfile())
  }, [dispatch, jwtToken])
  console.log(jwtToken, userProfile);

  return {
    userProfile
  }
}