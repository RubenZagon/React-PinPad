import * as React from 'react';
import {Key} from './Key';
import { withA11y } from '@storybook/addon-a11y';
import {text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Components | Key',
  decorators: [withA11y, withKnobs],
};

export const Default = () => <Key  value={text('Number', '1')}/>;
