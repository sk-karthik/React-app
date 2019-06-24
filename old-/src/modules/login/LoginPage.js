import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import { tsConstructorType } from '@babel/types';

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

export default function LoginPage(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <LoginForm classes={classes} loginState={props} />
    );
}