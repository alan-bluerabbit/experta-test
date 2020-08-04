const formatHelper = (provider) => {
    const errors = {
        name: provider.name === '',
        mail: !validateEmail(provider.mail),
        cuit: !validateNumbers(provider.cuit),
        address: provider.name === '',
        phone: !validateNumbers(provider.phone),
    }
    return errors
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateNumbers = (number) => {
    const re = /^[0-9\.\-\/]+$/;
    return re.test(String(number).toLowerCase());
}

export { formatHelper }