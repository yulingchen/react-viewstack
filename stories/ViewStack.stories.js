import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import ViewStack from './../src/ViewStack';

let colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF'
];

class Wrapper extends Component {

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
      selectedIndex: this.state.selectedIndex < colors.length - 1 ?
                this.state.selectedIndex + 1 : 0
    });
  };

  render () {
    return (
          <ViewStack
            classNames={this.props.fxClass}
            selectedIndex={this.state.selectedIndex}
            onFxStart={() => { null; }}
            onFxEnd={() => { null; }}
            style={{ width: '400px', height: '300px' }}
              >
              {colors.map( ( color, idx ) =>
                  <div style={{ width: '400px', height: '300px', backgroundColor: color }} key={idx}>{idx}</div>
              )}
          </ViewStack>
        );
  }
}

storiesOf( 'ViewStack', module )
  .add( 'with fade-through', () => (
      <Wrapper fxClass='fade-through' />
  ) )
  .add( 'with fortune-wheel vertical', () => (
      <Wrapper fxClass='fortune-wheel-v' />
  ) )
  .add( 'with fortune-wheel horizontal', () => (
      <Wrapper fxClass='fortune-wheel' />
  ) );
