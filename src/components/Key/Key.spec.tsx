import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Key} from './';

describe('Key', () => {
  it('should render a key with a number', () => {
    const renderResult: RenderResult = render(
        <Key value={'1'}/>
    );
    expect(renderResult.queryByText('1')).toBeTruthy();
  });

  it('dont should display any word in the keys, only numbers', () => {
    const renderResult: RenderResult = render(
        <Key value={'paco'}/>
    );
    expect(renderResult.queryByText('1')).toBeFalsy();
  });


});
