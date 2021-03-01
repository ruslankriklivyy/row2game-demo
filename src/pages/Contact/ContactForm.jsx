import React from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';

import { Button } from '../../components';
import { validateForm, sendEmail } from '../../helpers';

import './Contact.scss';

const validate = (values) => {
  const errors = {};
  validateForm({ errors, values });

  return errors;
};

const ContactForm = () => {
  const onHandleSend = (e) => {
    sendEmail(e);
    formik.handleSubmit();
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={onHandleSend}>
      <div className="form-item">
        <div className="form">
          <input
            required
            value={formik.values.name}
            type="text"
            name="name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="name"
            className={classNames('label-name', {
              true: formik.touched.name && !formik.errors.name,
            })}>
            <span className="content-name">Your Name</span>
          </label>
        </div>
        <span className="form-error">
          {formik.errors && formik.touched.name && formik.errors.name && formik.errors.name}
        </span>
      </div>
      <div className="form-item">
        <div className="form">
          <input
            required
            value={formik.values.email}
            type="text"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="email"
            className={classNames('label-name', {
              true: formik.touched.email && !formik.errors.email,
            })}>
            <span className="content-name">Your Email</span>
          </label>
        </div>
        <span className="form-error">
          {formik.errors && formik.touched.email && formik.errors.email && formik.errors.email}
        </span>
      </div>
      <div className="form-item">
        <div className="form">
          <textarea
            required
            value={formik.values.message}
            autoComplete="off"
            type="text"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="message"
            className={classNames('label-name', {
              true: formik.touched.message && !formik.errors.message,
            })}>
            <span className="content-name">Your message</span>
          </label>
        </div>
        <span className="form-error">
          {formik.errors &&
            formik.touched.message &&
            formik.errors.message &&
            formik.errors.message}
        </span>
      </div>

      <Button type="submit" disabled={formik.isSubmitting} required>
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
