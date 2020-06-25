import React from 'react'
import * as ReactRedux from 'react-redux'
import { renderHook, act } from '@testing-library/react-hooks'
import { useSignUp } from '../../hooks/useSignUp'
import { StoreProvider } from '../../../utils.unitTest/storeProvider'

describe('hooks/useSignUp', () => {
  let spyOnUseSelector
  let spyOnDispatch
  let spyOnUseEffect
  let testedHook

  beforeEach(() => {
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch')
    spyOnUseSelector = jest.spyOn(ReactRedux, 'useSelector')
    spyOnUseEffect = jest.spyOn(React, 'useEffect')

    testedHook = renderHook(() => useSignUp(), { wrapper: StoreProvider })
  })
  afterAll(() => jest.clearAllMocks())

  it('should call useDispatch, useSelector and useEffect', function () {
    act(() => {
      testedHook.rerender()
    })

    expect(spyOnUseEffect).toHaveBeenCalled()
    expect(spyOnDispatch).toHaveBeenCalled()
    expect(spyOnUseSelector).toHaveBeenCalled()
  })

  describe('when saveEmail is call', () => {
    describe('with correct event', () => {
      it('should set correct state', function () {
        act(() =>
          testedHook.result.current.saveEmail({
            target: { value: 'mock value' },
          })
        )
        expect(testedHook.result.current.email).toEqual('mock value')
      })
    })
    describe('with incorrect event', () => {
      it('should not set new state', function () {
        act(() => testedHook.result.current.saveEmail({ target: {} }))
        expect(testedHook.result.current.email).toEqual('')
      })
    })
  })

  describe('when savePassword is call', () => {
    describe('with correct event', () => {
      it('should set correct state', function () {
        act(() =>
          testedHook.result.current.savePassword({
            target: { value: 'mock value' },
          })
        )
        expect(testedHook.result.current.password).toEqual('mock value')
      })
    })
    describe('with incorrect data', () => {
      it('should not set new state', function () {
        act(() => testedHook.result.current.savePassword({ target: {} }))
        expect(testedHook.result.current.password).toEqual('')
      })
    })
  })

  describe('when saveRePassword is call', () => {
    describe('with correct event', () => {
      it('should set correct state', () => {
        act(() =>
          testedHook.result.current.saveRePassword({
            target: { value: 'mock value' },
          })
        )
        expect(testedHook.result.current.rePassword).toEqual('mock value')
      })
    })
    describe('with incorrect data', () => {
      it('should ', () => {
        act(() => testedHook.result.current.saveRePassword({ target: '' }))
        expect(testedHook.result.current.rePassword).toEqual('')
      })
    })
  })

  describe('when sendFormData is call', () => {
    describe('with incorrect password state', () => {
      it('should set equivalent password error state', () => {
        act(() => {
          testedHook.result.current.setPassword('j#')
          testedHook.result.current.sendFormData()
        })
        expect(testedHook.result.current.passwordError).toEqual({
          isError: true,
          message: 'password is required',
        })
      })
    })
    describe('with incorrect email state', () => {
      it('should set equivalent email error state', () => {
        act(() => {
          testedHook.result.current.setEmail('not correct email mock')
          testedHook.result.current.sendFormData()
        })
        expect(testedHook.result.current.emailError).toEqual({
          isError: true,
          message: 'email is required',
        })
      })
    })
  })
})
