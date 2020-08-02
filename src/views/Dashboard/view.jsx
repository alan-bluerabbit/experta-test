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

import useStyles from './styles.js';

function Dashboard() {
		const [providerOpen, setProviderOpen] = React.useState(false);
		const [newProviderOpen, setNewProviderOpen] = React.useState(false);
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

		const handleDeleteProvider = (provider) => {
			console.log('delete')
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
                      <Providers openProviderDialog={handleProviderOpen} deleteProvider={handleDeleteProvider}/>
                      </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Copyright />
                </Box>
            </Container>
            </main>
						<ProviderDialog provider={selectedProvider} open={providerOpen} handleClose={handleProviderClose} />
						<CreateDialog open={newProviderOpen} handleClose={handleNewProviderClose} />
        </div>
    );
}

export default Dashboard;
