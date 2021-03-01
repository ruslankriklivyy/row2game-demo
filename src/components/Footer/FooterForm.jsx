import React from 'react';
import { useFormik } from 'formik';

import { validateForm, sendEmail } from '../../helpers';

const validate = (values) => {
  const errors = {};
  validateForm({ errors, values });

  return errors;
};

const FooterForm = () => {
  const onHandleSend = (e) => {
    sendEmail(e);
    formik.handleSubmit();
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={onHandleSend}>
      <div className="contact-us-block">
        <input
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
        />
        <button type="submit" disabled={formik.isSubmitting}>
          Send
        </button>
      </div>
      <span className="form-error">
        {formik.errors && formik.touched.email && formik.errors.email && formik.errors.email}
      </span>
    </form>
  );
};

export default FooterForm;
