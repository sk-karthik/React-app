import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../../lwt.png';
import store from 'store';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const handleLogout = history => () => {
    store.remove('isLoggedIn');
    history.push('/login');
};
const Navbar = ({ history }) => {
    console.log(history);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <img src={logo} alt="logo" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>

                    </Typography>
                    <Button color="inherit" onClick={handleLogout(history)}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
//https://tylermcginnis.com/react-router-protected-routes-authentication/