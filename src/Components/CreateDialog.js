import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from '@material-ui/core';

const CreateDialog = (props) => {
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
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="cuit"
                    label="CUIT"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Dirección"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Teléfono"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="mail"
                    label="Correo electrónico"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={props.handleClose} color="primary">
                Agregar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateDialog