import React from 'react';
import { storiesOf } from '@storybook/react';
import MainNavigation from '../../src/common/components/Navigation/mainNavigation';

storiesOf('Navigation', module)
  .add('Main Navigation', () => (
    <MainNavigation>
      <a href="/">Home</a>
      <a href="/subPage">Sub Page</a>
    </MainNavigation>
  )).add('Main Navigation bilmemne classlı', () => (
    <MainNavigation className="bilmemne">
      <a href="/">Home</a>
      <a href="/subPage">Sub Page</a>
    </MainNavigation>
  ));  