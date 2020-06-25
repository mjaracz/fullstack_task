import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProfile, getProfile } from '../redux/actions'
import { RootState } from '../../redux/types'

export const useProfile = () => {
  const {
    signIn: { jwtToken },
    userProfile,
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile(jwtToken))
    return () => dispatch(clearProfile())
  }, [dispatch, jwtToken])

  return {
    userProfile,
  }
}
