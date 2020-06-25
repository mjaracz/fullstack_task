import React, { FC } from 'react'
import { useStyle } from './styled'

export const PageNotFound: FC = () => {
  const { pageNotFound } = useStyle()
  return <div className={pageNotFound}>Page Not Found</div>
}
