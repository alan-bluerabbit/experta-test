import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteDialog(props) {
  return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"¿Seguro que desea eliminar este proveedor?"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Advertencia: Esta acción no puede deshacerse
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={props.deleteProvider} color="primary" autoFocus>
                Eliminar
            </Button>
        </DialogActions>
        </Dialog>
  );
}