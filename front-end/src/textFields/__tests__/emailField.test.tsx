import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {EmailField} from '../emailField';

describe('<EmailField/>', () => {
  describe('when pass correct props', () => {
    describe('and props validation.isError is true', () => {
      let GetByTestId;
      let BaseElement;
      beforeEach(() => {
        const {getByTestId, baseElement} = render(
          <EmailField validation={{isError: true}} saveEmail={jest.fn()} />
        )
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });

      it('should render <TextField error/>', () => {
        fireEvent.change(GetByTestId('textFieldError'));
        expect(GetByTestId('textFieldError')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
    describe('and props validation.isError is false', () => {
      let GetByTestId;
      let BaseElement;
      beforeAll(() => {
        const {getByTestId, baseElement} = render(
          <EmailField validation={{isError: false}} saveEmail={jest.fn()} />
        )
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });
      it('should render <TextField/>', () => {
        fireEvent.change(GetByTestId('textFieldExpected'));
        expect(GetByTestId('textFieldExpected')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
  })

})