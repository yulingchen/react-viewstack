import { configure } from '@kadira/storybook';

function loadStories() {
  require('./../stories/Button.stories.js');
}

configure(loadStories, module);
