import React from 'react';

import { storiesOf } from '@storybook/react';

import { Week }   from '../index';


storiesOf('Week', module)
  .add('Default', () => <Week/>)
    .add('With Event', () => <Week event/>)
