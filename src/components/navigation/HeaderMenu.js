import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../lwt.png';
import store from 'store';
import { withRouter } from "react-router-dom";

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class Navbar extends React.Component {

    /* constructor(props) { // If we handle changes or set values then can enable constructor
       super(props);
    } */
    handleLogout = history => (e) => {
        store.remove('isLoggedIn');
        history.go('/login');
    };
    menuNavigate = page => {
        this.props.history.push('/' + page);
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                                <img src={logo} alt="logo" />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>

                            </Typography>
                            <Button color="inherit" onClick={() => this.menuNavigate('dashboard')}>Home</Button>
                            <Button color="inherit" onClick={() => this.menuNavigate('about')}>About</Button>
                            <Button color="inherit" onClick={this.handleLogout(this.props.history)}>Logout</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter((withStyles(useStyles)(Navbar)));

