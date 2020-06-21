import React from 'react';
import {render} from '@testing-library/react';
import {RememberPass} from '../';

describe('<RememberPass/>', () => {
  it('should be defined and match Snapschot', function () {
    const {baseElement} = render(<RememberPass/>)
    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
})