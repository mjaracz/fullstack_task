import React from 'react';
import {render} from '@testing-library/react';
import {PageNotFound} from '../';


describe('<PageNotFound/> ', () => {
  it('should be defined and match snapshot',  () => {
    const {baseElement} = render(<PageNotFound />)
    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot()
  });
})