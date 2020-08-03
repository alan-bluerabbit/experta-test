import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';

import Providers from '../../Components/Providers';
import Copyright from '../../Components/Copyright'
import ProviderDialog from '../../Components/ProviderDialog';
import CreateDialog from '../../Components/CreateDialog';

import { useStore } from '../../helpers/store'

import useStyles from './styles.js';
import DeleteDialog from '../../Components/DeleteDialog';

function Dashboard() {
	const { state, dispatch } = useStore()
	const [providerOpen, setProviderOpen] = React.useState(false);
	const [newProviderOpen, setNewProviderOpen] = React.useState(false);
	const [deleteProviderOpen, setDeleteProviderOpen] = React.useState(false);
	const [selectedProvider, setSelectedProvider] = React.useState({})

	const classes = useStyles();
	
	const handleProviderOpen = (provider) => {
		setSelectedProvider(provider)
		setProviderOpen(true);
	};

	const handleProviderClose = () => {
		setSelectedProvider({})
		setProviderOpen(false);
	};

	const handleNewProviderOpen = () => {
		setNewProviderOpen(true);
	};

	const handleNewProviderClose = () => {
		setNewProviderOpen(false);
	};

	const handleDeleteProviderOpen = (provider) => {
		setSelectedProvider(provider)
		setDeleteProviderOpen(true);
	};

	const handleDeleteProviderClose = () => {
		setSelectedProvider({})
		setDeleteProviderOpen(false);
	};

	const handleDeleteProvider = () => {
		dispatch({type: "remove", provider: selectedProvider})
		setDeleteProviderOpen(false);
	}

	const handleAddProvider = (provider) => {
		dispatch({type: "add", provider})
		setNewProviderOpen(false)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							Experta Seguros
						</Typography>
						<IconButton color="inherit" onClick={handleNewProviderOpen}>
							<AddIcon />
						</IconButton>
				</Toolbar>
			</AppBar>
			<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
								<Paper className={classes.paper}>
								<Providers providers={state.providers} openProviderDialog={handleProviderOpen} deleteProvider={handleDeleteProviderOpen}/>
								</Paper>
						</Grid>
					</Grid>
					<Box pt={4}>
						<Copyright />
					</Box>
			</Container>
			</main>
			<ProviderDialog provider={selectedProvider} open={providerOpen} handleClose={handleProviderClose} />
			<CreateDialog open={newProviderOpen} handleClose={handleNewProviderClose} addProvider={handleAddProvider}/>
			<DeleteDialog open={deleteProviderOpen} handleClose={handleDeleteProviderClose} deleteProvider={handleDeleteProvider} />
		</div>
	);
}

export default Dashboard;
