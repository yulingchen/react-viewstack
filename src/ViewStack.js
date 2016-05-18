require( './view-stack.scss' );

import React, { Component } from 'react';
import classnames from 'classnames';

export default class ViewStack extends Component {

  /**
   * Default component css classses
   * @type {String}
   */
  static defaultClassNames = 'view-stack';

  /**
   * Default animation css classses
   * @type {String}
   */
  static defaultEffectClassNames = 'transition-wrapper';

  /**
   * Default animation duration in ms
   * @type {String}
   */
  static defaultEffectDuration = 1000;

  /**
   * Css class indicating current element in the view stack
   * @type {String}
   */
  static selectedElementClass = 'current';

  /**
   * String enum for next element transition direction
   * @type {String}
   */
  static fxDirectionNext = 'Next';

  /**
   * String enum for previous element transition direction
   * @type {String}
   */
  static fxDirectionPrev = 'Prev';

  /**
   * PropTypes ES7 way
   * @see https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers
   */
  static propTypes = {
    classNames: React.PropTypes.string,
    selectedIndex: React.PropTypes.number.isRequired,
    fxDirection: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    style: React.PropTypes.object,
    onFxStart: React.PropTypes.func,
    onFxEnd: React.PropTypes.func
  };

  /**
   * Initial props ES7 way
   * @see https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers
   */
  static defaultProps = {
    classNames: null,
    selectedIndex: 0,
    fxDirection: 'Next'
  };

  /**
   * Initial state ES7 way
   * @see https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers
   */
  state = {
    fxInProgress: false,
    nextIndex: null
  };

  /**
   * internla ref to the timeout managing the animation duration
   * @type {number}
   */
  fxTimeout = null;

  /**
   * invoked once, before initial 'render'
   * @return {void}
   */
  componentWillMount () {
    let hasChildren = this.props.children.size > 0 || this.props.children.length > 0;
        // set initial selectedIndex if provided with children
    if ( this.props.children && hasChildren ) {
      this.setState({
        selectedIndex: this.props.selectedIndex
      });
    }
  }

  /**
   * invoked immediately before a component is unmounted from the DOM
   * @return {void}
   */
  componentWillUnmount () {
    if ( this.state.fxInProgress ) {
      this.transitionEnd();
    }
  }

  /**
   * invoked when component is receiving props, not for initial 'render'
   * @param  {object} nextProps next component props
   * @return {void}
   */
  componentWillReceiveProps ( nextProps ) {
    let hasChildren = this.props.children.size > 0 || this.props.children.length > 0;
    let numChildren = this.props.children.size || this.props.children.length;
    if ( hasChildren &&
            nextProps.selectedIndex >= 0 &&
            nextProps.selectedIndex < numChildren &&
            nextProps.selectedIndex !== this.props.selectedIndex ) {
      this.transitionStart( nextProps.selectedIndex );
    }
  }

  /**
   * Start the transition fx
   * @param  {number} nextIndex index of the child to transition to
   * @return {void}
   */
  transitionStart = ( nextIndex ) => {
    this.setState({
      fxInProgress: true,
      nextIndex: nextIndex
    });

    if ( this.props.onFxStart ) {
      this.props.onFxStart();
    }

    this.fxTimeout = window.setTimeout( this.transitionEnd, ViewStack.defaultEffectDuration );
  }

  /**
   * End the transition fx
   * @return {void}
   */
  transitionEnd = () => {
    if ( this.fxTimeout ) {
      window.clearTimeout( this.fxTimeout );
      this.fxTimeout = null;
    }

    if ( this.props.onFxEnd ) {
      this.props.onFxEnd();
    }

    this.setState({
      selectedIndex: this.state.nextIndex,
      fxInProgress: false,
      nextIndex: null
    });
  }

  /**
   * react render
   * @return {void}
   */
  render () {
    let currentElIdx = this.state.selectedIndex;
    let fxInProgress = this.state.fxInProgress;
    let nextElIdx = this.state.nextIndex;
    let dir = fxInProgress ? this.props.fxDirection : '';

    return (
      <ul className={ classnames(
          ViewStack.defaultClassNames,
          this.props.classNames,
          ViewStack.defaultEffectClassNames
          ) }
        style={ this.props.style }
          >
          { React.Children.map( this.props.children, ( child, i ) => {
            return <li key={ i } className={ classnames({
              [ ViewStack.selectedElementClass ]: i === currentElIdx,
              [ 'fxOut' + dir ]: i === currentElIdx && fxInProgress,
              [ 'fxIn' + dir ]: i === nextElIdx && fxInProgress
            }) }>{ child }</li>;
          }) }
      </ul>
    );
  }
}
