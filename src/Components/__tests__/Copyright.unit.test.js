import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from '../Copyright';

test('<Copyright />', () => {
    const tree = renderer
    .create(<Copyright />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
