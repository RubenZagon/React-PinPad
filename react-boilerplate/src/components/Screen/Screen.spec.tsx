import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Screen} from './';

describe('Screen', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Screen/>,
    );
    expect(renderResult.queryByText('Hello from Screen!')).toBeTruthy();
  });
});