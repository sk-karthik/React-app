import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField } from 'formik-material-ui';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import isEmpty from "lodash/isEmpty";

import store from 'store';
import { Redirect, withRouter } from 'react-router-dom';
import isLoggedIn from '../../_helpers/isLoggedIn';
import Alert from '../_shared/Alert';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 'admin',
            password: '',
            error: false,
            message: '',
            classes: this.props.classes,
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
        const { history } = this.props;
        var self = this;
        this.setState({ isLoading: true });
        //For testing sample username and password validation
        if (!(values.userid === 'admin' && values.password === 'testing')) {
            this.setState({ error: true, message: "UserName or Password is incorrect. Try again!" });
            setSubmitting(false);
            self.setState({ isLoading: false });
            return;
        }
        setSubmitting(true);
        store.set('isLoggedIn', true);
        history.go('/dashboard');
        return;
        /* Using RestAPI to authenticate user credentials */
        fetch('http://ec2-XX-XX-XX-XX.compute-1.amazonaws.com:9000/api/v1/userAuth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(function (response) {

                if (response.ok) {
                    return response.json();
                } else {
                    self.setState({ error: true, message: "Failed to submit form, Try again!" });
                    setSubmitting(false);
                    self.setState({ isLoading: false });
                }
            }).then(function (responseBody) {
                if (responseBody.msg === 'OK') {
                    // localStorage.setItem('loginState', JSON.stringify(values));
                    store.set('isLoggedIn', true);
                    history.push('/dashboard');
                    return;
                } else {
                    self.setState({ error: true, message: "UserName or Password is incorrect. Try again!" });
                    setSubmitting(false);
                    self.setState({ isLoading: false });
                }
            })
            .catch(function (error) {
                self.setState({ error: true, message: "Failed to submit form, Try again!" });
                setSubmitting(false);
                self.setState({ isLoading: false });
            })
        return;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.setState({ error: false, message: "" });
    };

    render() {
        const { error, message } = this.state;
        if (isLoggedIn()) {
            return <Redirect to="/dashboard" />;
        }
        const validationFrom = Yup.object().shape({
            userid: Yup.string()
                .required('User ID is required')
                .min(4, 'User ID must be at least 4 characters'),
            password: Yup.string()
                .required('Password is required')
                .min(5, 'Password must be at least 5 characters')
        });
        return (
            <Formik
                enableReinitialize={true}
                initialValues={this.state}
                validationSchema={validationFrom}
                onSubmit={this.handleSubmit}
                render={({ isSubmitting, errors }) => (

                    <Form>
                        <Container component="main" maxWidth="xs" >
                            <CssBaseline />
                            <div className={this.state.classes.paper}>
                                <Avatar className={this.state.classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                {error ? <Alert
                                    status="error"
                                    alert={error}
                                    content={message}
                                /> : ''}

                                <Field
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    label="User ID"
                                    name="userid"
                                    id="userid"
                                    type="text"
                                    autoComplete="false"
                                    component={TextField}
                                    value={this.state.userid}

                                    InputProps={{ onChange: this.handleChange }}
                                />
                                <Field
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    component={TextField}

                                    value={this.state.password}
                                    InputProps={{ onChange: this.handleChange }}
                                />

                                {
                                    (!this.state.isLoading) ?
                                        <React.Fragment>
                                            <Button
                                                type="submit" fullWidth variant="contained" color="primary"
                                                className={this.state.classes.submit}
                                                disabled={isSubmitting || !isEmpty(errors)}>
                                                Sign In
                                            </Button>
                                            <Grid container>
                                                <Grid item xs></Grid>
                                                <Grid item></Grid>
                                            </Grid>
                                        </React.Fragment>
                                        :
                                        <div>Loading...</div>
                                }
                            </div>
                        </Container>
                    </Form>

                )
                }

            />
        )
    }
}
export default withRouter(LoginForm);