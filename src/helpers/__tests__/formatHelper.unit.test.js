import { formatHelper } from '../formatHelper';

test('formatHelper', () => {
    const provider = {
        id: 123456,
        name: '',
        mail: 'invalid Email Format',
        cuit: 'ABCD',
        address: '',
        phone: 'invalid Phone Format'
    }

    const errorStatus = {
        name: true,
        cuit: true,
        mail: true,
        address: true,
        phone: true
    }

    const helperResult = formatHelper(provider)

    expect(helperResult).toEqual(errorStatus)
});
