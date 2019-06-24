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
        console.log(props);
        //  console.log(this.state);
        super(props);
        this.state = {
            classes: this.props.classes,
            isLoading: false
        }
    }
    loginStateChange(loginVlaue) {
        this.setState({ user: loginVlaue });
        console.log(loginVlaue);
        //  this.props.history.push("/Dashboard");
    }
    render() {
        const validationFrom = Yup.object().shape({
            userid: Yup.string()
                .required('User ID is required')
                .min(4, 'User ID must be at least 4 characters'),
            password: Yup.string()
                .required('Password is required')
                .min(5, 'Password must be at least 5 characters')
        });
        const initialFormValues = {
            userid: '',
            password: ''
        };

        return (
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationFrom}
                onSubmit={(values, actions) => {
                    var self = this;
                    this.setState({ isLoading: true });
                    actions.setSubmitting(false);
                    // actions.resetForm(initialFormValues);
                    fetch('http://ec2-35-169-251-74.compute-1.amazonaws.com:9000/api/v1/userAuth', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values)
                    })
                        .then(function (response) {
                            console.log(response);
                            if (response.ok) {
                                return response.json();
                            } {
                                throw new Error("Post Failed")
                            }
                        }).then(function (responseBody) {
                            if (responseBody.msg == 'OK') {
                                localStorage.setItem('loginState', JSON.stringify(values));
                                self.loginStateChange(JSON.stringify(values));
                                // this.setState({ user: JSON.stringify(values) });

                            } else {
                                return new Error(responseBody.msg);
                            }
                        })
                        .catch(function (error) {
                            console.log("Request failed", error);
                        })
                }
                }
                render={({ submitForm, isSubmitting, isValid }) => (
                    <Form  >
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
                                    variant="outlined" margin="normal" fullWidth label="User ID" name="userid" id="userid" type="text"
                                    autoComplete="userid" component={TextField} />
                                <Field
                                    variant="outlined" margin="normal" fullWidth id="password" name="password" label="Password" type="password"
                                    autoComplete="current-password" component={TextField} />

                                {
                                    (!this.state.isLoading) ?
                                        <React.Fragment>
                                            <Button
                                                type="submit" fullWidth variant="contained" color="primary"
                                                className={this.state.classes.submit} disabled={isSubmitting || !isValid}
                                            > Sign In
                                         </Button>
                                            <Grid container>
                                                <Grid item xs><Link href="#" variant="body2"> Forgot password?</Link></Grid>
                                                <Grid item><Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link></Grid>
                                            </Grid>
                                        </React.Fragment>
                                        :
                                        <div>Loading...</div>
                                }
                            </div>
                        </Container>
                    </Form>
                )}
            />
        )
    }
}
export default LoginForm;