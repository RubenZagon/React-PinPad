import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Key} from './';

describe('Key', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Key/>,
    );
    expect(renderResult.queryByText('Hello from Key!')).toBeTruthy();
  });
});