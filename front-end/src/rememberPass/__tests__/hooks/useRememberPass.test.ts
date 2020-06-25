import React from 'react'
import * as ReactRedux from 'react-redux'
import { renderHook, act } from '@testing-library/react-hooks'
import { useRememberPass } from '../../hooks/useRememberPass'
import { StoreProvider } from '../../../utils.unitTest/storeProvider'

describe('hooks/useRememberPas', () => {
  let spyOnDispatch
  let spyOnUseEffect
  let spyOnSelector
  beforeEach(() => {
    spyOnUseEffect = jest.spyOn(React, 'useEffect')
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch')
    spyOnSelector = jest.spyOn(ReactRedux, 'useSelector')
  })
  it('should call useEffect, useDispatch, and useSelector', () => {
    const { rerender } = renderHook(() => useRememberPass(), { wrapper: StoreProvider })
    act(() => {
      rerender()
    })
    expect(spyOnSelector).toHaveBeenCalled()
    expect(spyOnDispatch).toHaveBeenCalled()
    expect(spyOnUseEffect).toHaveBeenCalled()
  })
})
