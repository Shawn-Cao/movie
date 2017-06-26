import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Spinner from './index';

describe('MovieTime', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
  });
  it('matches snapshot when spinning', () =>{
    const tree = renderer.create(
      <Spinner spin={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matchss snapshot when not spinning', () =>{
    const tree = renderer.create(
      <Spinner spin={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
