import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Profile } from '..'
import { StoreProvider } from '../../utils.unitTest/storeProvider'

describe('<Profile/>', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <Profile />
        </StoreProvider>
      </BrowserRouter>
    )
    expect(baseElement).toBeDefined()
    expect(baseElement).toMatchSnapshot()
  })
})
