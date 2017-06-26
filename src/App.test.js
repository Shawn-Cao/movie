jest.mock('./Movie/api/theMovieDb');
var dummyElement = global.document.createElement('div');
global.document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('App', () => {
  it('renders without crashing and matching snapshot', () =>{
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
