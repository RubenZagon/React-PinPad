import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Screen} from './';

describe('Screen', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Screen digit={'0'} isCorrect={true}/>,
    );
    expect(renderResult.queryByText('OK')).toBeTruthy();
  });
});
