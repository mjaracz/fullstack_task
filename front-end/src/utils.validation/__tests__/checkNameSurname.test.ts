import { checkNameSurname } from '../checkNameSurname'

describe('utils.validation/checkNameSurname', () => {
  describe('when got empty value', () => {
    it('should return expected ValidationError', () => {
      expect(checkNameSurname('')).toEqual({
        isError: true,
        message: 'value is required',
      })
    })
  })
  describe('when got not empty and correct value', () => {
    it('should return ValidationError with false isError field ', () => {
      expect(checkNameSurname('correctName')).toEqual({ isError: false })
    })
  })
  describe('when got not empty and too short value', () => {
    it('should return expected ValidationError', () => {
      expect(checkNameSurname('ns')).toEqual({
        isError: true,
        message: 'value is too short',
      })
    })
  })
})
