import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

class Ikmatui extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        animal: ''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Please enter an email address'),
                        animal: Yup.string().required('Required'),
                    })}
                    onSubmit={(values) => {
                        this.props.nextStep(values);
                    }}
                    render={({ values, isSubmitting }) => (
                        <Form>
                            <Field
                                name="email"
                                type="email"
                                value={values.email}
                                component={TextField}
                                variant="outlined"
                            />
                            <Field
                                name="animal"
                                value={values.animal}
                                component={TextField}
                                variant="outlined"
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        );
    }
}


export default Ikmatui;  