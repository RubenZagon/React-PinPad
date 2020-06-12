import * as React from 'react';
import {Pad} from './Pad';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components | Pad',
  decorators: [withA11y],
};

export const Default = () => <Pad />;
