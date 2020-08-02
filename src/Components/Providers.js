import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import Title from './Title';
import Colors from '../Constants/Colors';

import MockData from '../Constants/mockData';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Providers(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Proveedores</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>CUIT</TableCell>
            <TableCell>Fecha de creación</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MockData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cuit}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                <Button onClick={() => props.openProviderDialog(row)}>
                  <PersonIcon
                    style={{ color: Colors.primary.editColor }}
                  />
                </Button>
                <Button onClick={props.deleteProvider}>
                  <DeleteIcon
                    style={{ color: Colors.primary.editColor }}
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver más proveedores
        </Link>
      </div>
    </React.Fragment>
  );
}