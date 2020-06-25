import React, { FC } from 'react'
import { useStyle } from './styled'
import { ButtonHome } from '../buttons'

export const Home: FC = () => {
  const { home, homeText, textDistinction, buttonContainer } = useStyle()

  return (
    <div className={home}>
      <p className={homeText}>Example of Sign In Application.</p>
      <p className={homeText}>
        <span className={textDistinction}>Authorization</span> based for <span className={textDistinction}>JWT </span>token.
      </p>
      <p className={homeText}>
        Feel free to <span className={textDistinction}>try login</span> with fake user data.
      </p>
      <div className={buttonContainer}>
        <ButtonHome path="sign-up" label="Just register" />
        <p className={homeText}>or</p>
        <ButtonHome path="sign-in" label="Sign In" />
      </div>
    </div>
  )
}
