import * as React from 'react';
import {Screen} from './Screen';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Screen',
  decorators: [withA11y],
};

export const withText = () => <Screen  digit={'0'} isCorrect={true}/>;
