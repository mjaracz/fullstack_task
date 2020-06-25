import React from 'react'
import { render } from '@testing-library/react'
import Index from '../app'

test('renders learn react link', () => {
  const { baseElement } = render(<Index />)
  expect(baseElement).toBeDefined()
})
