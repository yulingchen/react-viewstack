import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './../src/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>My First Button</Button>
  ))
  .add('with no text', () => (
    <Button></Button>
  ));
