import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, makeStyles } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import { formatHelper } from '../helpers/formatHelper';

const ProviderDialog = (props) => {
    const provider = props.provider
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
    const [resInc, setResInc] = React.useState(provider.resinc)

    const classes = useStyles()

    const editProvider = () => {
        const updatedProvider = {
            id: provider.id,
            name: nameRef.current.value,
            cuit: cuitRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            mail: mailRef.current.value,
            resinc: resInc
        }
        if (validateFormat(updatedProvider)) {
            props.editProvider(updatedProvider)
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
            <DialogTitle id="form-dialog-title">Información del proveedor</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre"
                    type="email"
                    defaultValue={provider.name}
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
                    defaultValue={provider.cuit}
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
                    defaultValue={provider.address}
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
                    defaultValue={provider.phone}
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
                    defaultValue={provider.mail}
                    inputRef={mailRef}
                    fullWidth
                    error={mailError}
                />
                <div className={classes.resIncContainer}>
                    <Typography variant="body2" color="textPrimary" align="center">
                        Responsable Inscripto:
                    </Typography>
                    <ToggleButton
                        classes={{
                            root: classes.resIncCheckContainer,
                            selected: classes.resIncCheckSelected,
                        }}
                        value="check"
                        selected={resInc}
                        size="small"
                        onChange={() => {
                            setResInc(!resInc);
                        }}
                    >
                        <CheckIcon />
                    </ToggleButton>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={editProvider} color="primary">
                Editar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProviderDialog

const useStyles = makeStyles((theme) => ({
    resIncContainer: {
        alignItems: 'center',
        display: 'flex',
        marginTop: 20
    },
    resIncCheckContainer: {
        marginLeft: 15
    },
    resIncCheckSelected: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
}));