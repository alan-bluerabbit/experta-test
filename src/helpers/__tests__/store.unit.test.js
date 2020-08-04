import { reducer } from '../store';

test('formatHelper', () => {
    const state = {
        providers: []
    }

    const providers = [
        {
            id: 123456,
            name: 'testName',
            mail: 'test@mail.com',
            cuit: 20-12345678-7,
            address: 'test address 123',
            phone: '+5491151234567'
        }
    ]

    const action = {
        type: 'load',
        providers
    }

    const expectedState = {
        providers
    }

    const storeResult = reducer(state, action)

    expect(storeResult).toEqual(expectedState)
});