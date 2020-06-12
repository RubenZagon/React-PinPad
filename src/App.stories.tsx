import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import {Pad} from './components/Pad';

export default {
    title: 'App | App',
    decorators: [withA11y],
};

export const home = () => <Pad/>;
