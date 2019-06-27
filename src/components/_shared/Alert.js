import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function Alert(props) {

    const alertMsg = props;
    const classes = useStyles2();
    const [open, setOpen] = React.useState(true);

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div>
            {(() => {
                if (alertMsg.status === 'success') {
                    return (
                        <Snackbar
                            open={open}
                            onClose={handleClose}
                        >
                            <MySnackbarContentWrapper
                                variant="success"
                                onClose={handleClose}
                                className={classes.margin}
                                message="This is an error message!"
                            />
                        </Snackbar>
                    )
                } else if (alertMsg.status === 'error') {
                    return (<Snackbar
                        open={open}
                        onClose={handleClose}
                    >
                        <MySnackbarContentWrapper
                            variant="error"
                            onClose={handleClose}
                            className={classes.margin}
                            message={alertMsg.content}
                        />
                    </Snackbar>)
                } else if (alertMsg.status === 'warning') {
                    return (<Snackbar
                        open={open}
                        onClose={handleClose}
                    >
                        <MySnackbarContentWrapper
                            variant="warning"
                            onClose={handleClose}
                            className={classes.margin}
                            message={alertMsg.content}
                        />
                    </Snackbar>)
                } else if (alertMsg.status === 'info') {
                    return (<Snackbar
                        open={open}
                        onClose={handleClose}
                    >
                        <MySnackbarContentWrapper
                            variant="info"
                            onClose={handleClose}
                            className={classes.margin}
                            message="This is an information message!"
                        />
                    </Snackbar>)
                } else if (alertMsg.status === 'info') {
                    return (<Snackbar
                        open={open}
                        onClose={handleClose}
                    >
                        <MySnackbarContentWrapper
                            variant="info"
                            onClose={handleClose}
                            className={classes.margin}
                            message="This is an information message!"
                        />
                    </Snackbar>)
                } else {
                    return <div></div>
                }
            })()}
        </div>
    );
}

export default Alert;