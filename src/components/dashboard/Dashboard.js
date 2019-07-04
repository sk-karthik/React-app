import React from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Redirect, withRouter } from 'react-router-dom';
import isLoggedIn from '../../_helpers/isLoggedIn';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
});

class Dashboard extends React.Component {

    /* constructor(props) { // If we handle changes or set values then can enable constructor
        super(props);
    } */
    render() {

        if (!isLoggedIn()) {
            return <Redirect to="/login" history={this.props.history} />
        }
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome to Dashboard Page
                    </Typography>
                </div>
            </Container>
        )
    }
}
export default withRouter(withStyles(useStyles)(Dashboard));
