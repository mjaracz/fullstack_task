import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts, getProducts } from '../redux/actions'
import { RootState } from '../../redux/types'

export const useProductsList = () => {
  const dispatch = useDispatch()
  const {
    products: { list, loading, error },
    signIn: { jwtToken },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    if (jwtToken) dispatch(getProducts(jwtToken))
    return () => dispatch(clearProducts())
  }, [dispatch, jwtToken])

  return {
    list,
    loading,
    error,
    jwtToken,
  }
}
