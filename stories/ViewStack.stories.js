import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ViewStack from './../src/ViewStack';

let sources = [
  'http://lorempixel.com/640/480/cats/',
  'http://lorempixel.com/640/480/nature/',
  'http://lorempixel.com/640/480/nightlife/'
];

class Wrapper extends Component {

  static propTypes = {
    fxClass: React.PropTypes.string
  };

  fxInterval = null;

  state = {
    selectedIndex: 0
  };

  componentDidMount () {
    this.fxInterval = window.setInterval( this.fxGo, 2500 );
  };

  componentWillUnmount () {
    if ( this.fxInterval ) {
      window.clearInterval( this.fxInterval );
    }
  }

  fxGo = () => {
    this.setState({
      selectedIndex: this.state.selectedIndex < sources.length - 1 ?
        this.state.selectedIndex + 1 : 0
    });
  };

  render () {
    return (
      <ViewStack
        classNames={ this.props.fxClass }
        selectedIndex={ this.state.selectedIndex }
        onFxStart={ action( 'transition started' ) }
        onFxEnd={ action( 'transition finished' ) }
        style={ { width: '640px', height: '480px' } }
          >
          { sources.map(( strSource, idx ) =>
            <img src={ strSource } key={ idx } />
          ) }
      </ViewStack>
    );
  }
}

storiesOf( 'ViewStack', module )
  .add( 'with fade-through', () => (
    <Wrapper fxClass='fade-through' />
  ))
  .add( 'with fortune-wheel vertical', () => (
    <Wrapper fxClass='fortune-wheel-v' />
  ))
  .add( 'with fortune-wheel horizontal', () => (
    <Wrapper fxClass='fortune-wheel' />
  ));
