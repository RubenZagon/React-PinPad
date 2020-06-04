import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Pad} from './';

describe('Pad', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Pad/>,
    );
    expect(renderResult.queryByText('Hello from Pad!')).toBeTruthy();
  });
});