import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {SignIn} from '../';
import {StoreProvider} from '../../utils/storeProvider';
import {BrowserRouter} from "react-router-dom";

describe('<FormField/>', () => {
  describe('when StoreProvider was mount ', () => {
    it('should correct fire event and match the snapshot', () => {
      const {getByText, baseElement} = render(
        <BrowserRouter>
          <StoreProvider>
            <SignIn/>
          </StoreProvider>
        </BrowserRouter>
      )

      fireEvent.click(getByText('Sign In'));
      expect(baseElement).toBeDefined();
      expect(baseElement).toMatchSnapshot()
    });
  });
});