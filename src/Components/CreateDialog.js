import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import { formatHelper } from '../helpers/formatHelper';

const CreateDialog = (props) => {
    const nameRef = React.useRef()
    const cuitRef = React.useRef()
    const addressRef = React.useRef()
    const phoneRef = React.useRef()
    const mailRef = React.useRef()
    const [nameError, setNameError] = React.useState(false)
    const [cuitError, setCuitError] = React.useState(false)
    const [addressError, setAddressError] = React.useState(false)
    const [phoneError, setPhoneError] = React.useState(false)
    const [mailError, setMailError] = React.useState(false)
    const [resInc, setResInc] = React.useState(false)

    const addProvider = () => {
        const provider = {
            name: nameRef.current.value,
            cuit: cuitRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            mail: mailRef.current.value,
            resinc: resInc
        }
        if (validateFormat(provider)) {
            props.addProvider(provider)
        }
    }

    const validateFormat = (provider) => {
        const status = formatHelper(provider)
        setNameError(status.name)
        setMailError(status.mail)
        setAddressError(status.address)
        setCuitError(status.cuit)
        setPhoneError(status.phone)
        if (status.name || status.mail || status.address || status.cuit || status.phone) {
            return false
        } else {
            return true
        }
    }
    return(
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle id="form-dialog-title">Agregar Nuevo Proveedor</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, rellenar todos los campos con la información del nuevo proveedor a ser agregado al sistema
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre"
                    type="email"
                    inputRef={nameRef}
                    fullWidth
                    error={nameError}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="cuit"
                    label="CUIT"
                    type="email"
                    inputRef={cuitRef}
                    fullWidth
                    error={cuitError}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Dirección"
                    type="email"
                    inputRef={addressRef}
                    fullWidth
                    error={addressError}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Teléfono"
                    type="email"
                    inputRef={phoneRef}
                    fullWidth
                    error={phoneError}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="mail"
                    label="Correo electrónico"
                    type="email"
                    inputRef={mailRef}
                    fullWidth
                    error={mailError}
                />
                Responsable Inscripto:
                <ToggleButton
                    value="check"
                    selected={resInc}
                    size="small"
                    onChange={() => {
                        setResInc(!resInc);
                    }}
                >
                    <CheckIcon />
                </ToggleButton>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={addProvider} color="primary">
                Agregar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateDialog