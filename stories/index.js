import { configure } from '@storybook/react';
import "../build/main.css";

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

function loadStories(){
  require('./button.js');
  require('./mainNavigation.js');
}

configure(loadStories, module);