import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import ViewStack from './../src/ViewStack';

global.chai.use( chaiEnzyme());

describe( 'ViewStack', () => {
  const fixture = (
    <ViewStack>
      <div className='unique' />
      <div className='unique2' />
    </ViewStack>
  );
  const wrapper = mount( fixture );

  it( 'should render', () => {
    expect( wrapper ).to.exist;
  });

  it( 'should render as unordered list', () => {
    expect( wrapper ).to.have.tagName( 'ul' );
  });

  it( 'should render passed child', () => {
    expect( wrapper ).to.contain( <div className='unique' /> );
  });

  it( 'should wrap passed children in li tags', () => {
    expect( wrapper ).to.have.exactly( 2 ).descendants( 'li' );
  });

  it( 'should have exactly 1 current child', () => {
    expect( wrapper ).to.have.exactly( 1 ).descendants( `.${ ViewStack.selectedElementClass }` );
  });
});
