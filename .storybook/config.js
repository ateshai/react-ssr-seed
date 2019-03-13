import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withInfo);

const viewportOptions = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({ viewport: { 
    viewports : {
      ...INITIAL_VIEWPORTS,
      ...viewportOptions 
    }
  }
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
