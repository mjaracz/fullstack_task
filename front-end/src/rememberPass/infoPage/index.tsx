import React from 'react'
import { useStyle } from '../styled'

export const RememberPassInfo = () => {
  const { rootRememberInfo, rememberInfoText, textDistinction } = useStyle()
  return (
    <div className={rootRememberInfo}>
      <p className={rememberInfoText}>Mail was send</p>
      <p className={rememberInfoText}>
        <span className={textDistinction}>Please check your mail </span> and follow to the link
      </p>
    </div>
  )
}
