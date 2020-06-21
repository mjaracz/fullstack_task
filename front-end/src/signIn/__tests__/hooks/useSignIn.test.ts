import {renderHook, act} from '@testing-library/react-hooks';
import * as ReactRedux from 'react-redux';
import * as checkEmailUtils from '../../utils.validation/checkEmail';
import * as checkPasswordUtils from '../../utils.validation/checkPassword';
import {useSignIn} from '../../hooks/useSignIn';
import {StoreProvider} from '../../../utils/storeProvider';

describe('hooks/useSignIn', () => {
  let spyOnDispatch;
  let spyOnCheckEmailUtils;
  let spyOnCheckPasswordUtils;
  let testedHook;
  beforeEach(() => {
    testedHook = renderHook(() => useSignIn(), { wrapper: StoreProvider }).result;
    spyOnCheckEmailUtils = jest.spyOn(checkEmailUtils, 'checkEmail');
    spyOnCheckPasswordUtils = jest.spyOn(checkPasswordUtils, 'checkPassword');
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('saveEmail function', () => {
    describe('when got correct event', () => {
      it('should set new email value', () => {
        act(() => {
          testedHook.current.saveEmail({target: {value: 'example@mail.com'}});
        });
        expect(testedHook.current.email).toEqual('example@mail.com');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', () => {
        act(() => {
          testedHook.current.saveEmail({target: 'incorrect event'});
        });
        expect(testedHook.current.email).toEqual(undefined);
      });
    });
  });

  describe('savePassword function', () => {
    describe('when got correct event', () => {
      it('should set new password value', () => {
        act(() => {
          testedHook.current.savePassword({target: {value: 'exampleMockPassword'}});
        });
        expect(testedHook.current.password).toEqual('exampleMockPassword');
      });
    });
    describe('when got incorrect event', () => {
      it('should not set new email value', () => {
        act(() => {
          testedHook.current.savePassword({target: 'incorrect event'});
        });
        expect(testedHook.current.password).toEqual(undefined);
      });
    });
  });

  describe('sendSignInReq function', () => {
    it('should call checkEmail, checkPassword utils', () => {
      act(() => {
        testedHook.current.sendSignInReq();
      });

      expect(spyOnCheckEmailUtils).toHaveBeenCalled();
      expect(spyOnCheckPasswordUtils).toHaveBeenCalled();
      expect(spyOnDispatch).toHaveBeenCalled();
    });
  });
})