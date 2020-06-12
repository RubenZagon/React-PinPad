import * as React from 'react';
import {Screen} from './Screen';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components | Screen',
  decorators: [withA11y],
};

export const Correct = () => <Screen  digit={'0'} isCorrect={true}/>;
export const Incorrect = () => <Screen  digit={'0'} isCorrect={false}/>;
