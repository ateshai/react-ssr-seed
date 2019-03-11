import React from 'react';
import { storiesOf } from '@storybook/react';

import MainNavigation from "../src/common/components/Navigation/mainNavigation";

storiesOf('MainNavigation', module)
.add('with text', () => <MainNavigation>
  <a href="/">Home</a>
  <a href="/subPage">Sub Page</a>
</MainNavigation>)