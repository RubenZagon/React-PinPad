import * as React from 'react';
import {Key} from './Key';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Key',
  decorators: [withA11y],
};

export const withText = () => <Key  Value={'1'}/>;
