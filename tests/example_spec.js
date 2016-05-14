import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ViewStack from './../src/ViewStack';

chai.use( chaiEnzyme());

describe( 'four', () => {
  it( 'should be 4', () => {
    expect( 4 ).to.equal( 4 );
  });
});

describe( 'is null', () => {
  it( 'should be null', () => {
    expect( null ).to.be.null;
  });
});

describe( 'ViewStack', () => {
  const vs = shallow(
    <ViewStack
      classNames='fade-through'
      selectedIndex={ 0 }
      >
      <div className='unique' />
    </ViewStack>
  );
  it( 'should render component', () => {
    expect( vs ).to.exist;
  });
});
