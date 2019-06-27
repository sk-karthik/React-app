import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardView from './DashboardView';
import Menu from '../navigation/HeaderMenu';

import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../_helpers/isLoggedIn';
const useStyles = makeStyles(theme => ({
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
}));




/* export default function SignIn() { */

const Dashboard = ({ history }) => {
    const classes = useStyles();
    if (!isLoggedIn()) {
        return <Redirect to="/login" history={history} />
    }

    return (
        <React.Fragment>
            <Menu history={history} />
            <DashboardView classes={classes} />
        </React.Fragment>
    );
};

export default Dashboard;


/* export default function Dashboard() {
    const classes = useStyles();

    return (
        <DashboardView classes={classes} />
    );
}
 */