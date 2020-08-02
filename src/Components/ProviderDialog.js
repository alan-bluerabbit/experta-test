import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';

const ProviderDialog = (props) => {
    const provider = props.provider
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
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="cuit"
                    label="CUIT"
                    type="email"
                    defaultValue={provider.cuit}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Dirección"
                    type="email"
                    defaultValue={provider.address}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Teléfono"
                    type="email"
                    defaultValue={provider.phone}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="mail"
                    label="Correo electrónico"
                    type="email"
                    defaultValue={provider.mail}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={props.handleClose} color="primary">
                Editar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProviderDialog