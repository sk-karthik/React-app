import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField } from 'formik-material-ui';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { classes: this.props.classes }
    }

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {

        console.log(values);
        alert('Form Submitted');
        setSubmitting(false);
        return;
    }


render() {

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required')
            })}
            onSubmit={this.handleSubmit}
            /*    onSubmit={fields => {
                   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
               }} */
            render={({ submitForm, isSubmitting, isValid }) => (
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

                            <Field
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email Address"
                                name="email"
                                id="email"
                                type="text"
                                autoComplete="email"
                                component={TextField}
                            />
                            <Field
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                component={TextField}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={this.state.classes.submit}
                                disabled={isSubmitting || !isValid}
                                onClick={submitForm}
                            > Sign In
                                </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                        </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Form>
            )}
        />
    )
}
}
export default LoginForm; 