import { configure } from '@kadira/storybook';

function loadStories () {
  require( './../stories/ViewStack.stories.js' );
}

configure( loadStories, module );
