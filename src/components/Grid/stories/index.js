import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid }   from '../index';


storiesOf('Grid', module)
  .add('with text', () => <Grid>Hmmm... :P</Grid>)
