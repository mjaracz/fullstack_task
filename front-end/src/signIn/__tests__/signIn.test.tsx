import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SignIn } from '..'
import { StoreProvider } from '../../utils.unitTest/storeProvider'

describe('<FormField/>', () => {
  describe('when StoreProvider was mount ', () => {
    it('should correct fire event and match the snapshot', () => {
      const { baseElement } = render(
        <BrowserRouter>
          <StoreProvider>
            <SignIn />
          </StoreProvider>
        </BrowserRouter>
      )

      expect(baseElement).toBeDefined()
      expect(baseElement).toMatchSnapshot()
    })
  })
})
