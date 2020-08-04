import React from 'react';
import renderer from 'react-test-renderer';
import Providers from '../Providers';

test('<Providers />', () => {
    const providers = [
        {
            id: 123456,
            name: 'testName',
            cuit: '20-12345678-7',
            created: 1234567,
        }
    ]
    const tree = renderer
    .create(<Providers providers={providers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});