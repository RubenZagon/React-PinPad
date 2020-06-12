import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Pad} from './';

describe('Pad', () => {
  it('should display the Pad with the differents key numbers', () => {
    const renderResult: RenderResult = render(
      <Pad/>,
    );

    '1234567890'.split('').forEach(keyNumber => {
    const getKeyNumber = renderResult.queryByText(keyNumber);
    expect(getKeyNumber).toBeTruthy();
    });
  });
});
