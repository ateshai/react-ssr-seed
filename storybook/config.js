import { configure } from '@storybook/react';
import "../build/main.css";

function loadStories() {
  require('./stories/index.js');
  require('./stories/navigation.js');

  // You can require as many stories as you need.
}

configure(loadStories, module);