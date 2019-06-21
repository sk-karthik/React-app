//https://codesandbox.io/embed/px277lj1x

import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Office name is required"),
  address: yup.string().required("Address is required")
});

export default () => (
  <Formik
    initialValues={{
      name: "",
      address: ""
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      console.log("form is submitted with", values);
    }}
    render={({ submitForm, isSubmitting, isValid }) => (
      <Form>
        <Field
          label="Office Name"
          name="name"
          required
          type="text"
          component={TextField}
        />
        <Field
          label="Address Line 1"
          name="addressLine1"
          type="text"
          component={TextField}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth={false}
          size="medium"
          disabled={isSubmitting || !isValid}
          onClick={submitForm}
          data-testid="submitButton"
        >
          Submit
        </Button>
      </Form>
    )}
  />
);
