import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../'
import { BrowserRouter } from 'react-router-dom'

describe('<Home/>', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(baseElement).toBeDefined()
    expect(baseElement).toMatchSnapshot()
  })
})
