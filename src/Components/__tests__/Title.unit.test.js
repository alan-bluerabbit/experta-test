import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';

test('<Title />', () => {
    const tree = renderer
    .create(<Title />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
