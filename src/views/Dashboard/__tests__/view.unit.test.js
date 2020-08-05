import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../view';
import { useStore } from '../../../helpers/store';

jest.mock("../../../helpers/store");

useStore.mockReturnValue({
    state: {
        providers: [
            {
                id: 123456,
                name: 'testName',
                mail: 'test@mail.com',
                cuit: 20-12345678-7,
                address: 'test address 123',
                phone: '+5491151234567'
            }
        ]
    }
})


test('<Dashboard />', () => {
    const tree = renderer
    .create(<Dashboard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});