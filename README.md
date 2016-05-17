
# React ViewStack

Simple viewstack with support for animated transitions.
Alternative to [ReactCSSTransitionGroup](http://facebook.github.io/react/docs/animation.html) with better control over in/out animation direction and transition effects out of the box. Like a (much) simpler version of [FullPage.js](http://alvarotrigo.com/fullPage/) written in react.

## Usage

### For development
Checkout, install npm dependencies, then you have available scripts:
* `npm run build` to compile a dist version
* `npm run clean` to clean dist directory
* `npm run coverage:report` to view code coverage report on port `9002`
* `npm run dev` to start a dev server with storybook environment on port `9001`
* `npm run lint` to pass esLint over the code
* `npm run lint:fix` to correct fixable lint errors
* `npm run test` for a single pass of linter and tests
* `npm run test:watch` for a continous test mode

### For consumption
- [ ] Todo


## Library format
Conforming to CommonJS format

## Handy urls
### Testing APIs in use:
* https://github.com/producthunt/chai-enzyme
* https://github.com/domenic/sinon-chai 

## Todo
- [x] Describe usage
- [x] Add esLint
- [x] Fix lint errors
- [x] Add tests
- [ ] Better tests
- [ ] Better coverage
- [ ] Use extract-text-plugin to provide separate stylesheet
- [ ] Use css modules to prevent global scope pollution
- [ ] Use animation events as detailed [here](http://facebook.github.io/react/docs/events.html#animation-events)
- [ ] Add more transition effects
- [ ] Better visualisation in storybook
- [ ] Better readme
- [ ] Publish on NPM
- [ ] Promote

## Contributing
* Make sure your IDE supports [.editorconfig](http://editorconfig.org/)

## Previous work
Shoutout and thanks to:
* [@arunoda](https://github.com/arunoda) for
  * [react-storybook](https://github.com/kadirahq/react-storybook)
  * [react-storybook-simple-demo](https://github.com/kadira-samples/react-storybook-simple-demo)
  * Being source of inspiration on how to develop react components in isolation
