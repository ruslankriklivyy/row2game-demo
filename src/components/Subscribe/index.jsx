import React from 'react';
import Fade from 'react-reveal/Fade';
import { useFormik } from 'formik';

import { validateForm, sendEmail } from '../../helpers';

import './Subscribe.scss';

const validate = (values) => {
  const errors = {};
  validateForm({ errors, values });

  return errors;
};

const Subscribe = () => {
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
    <Fade left>
      <div className="subscribe">
        <div className="container">
          <h2 className="subscribe__title">SIGN UP FOR Settle Down UPDATES</h2>
          <form onSubmit={onHandleSend} className="form">
            <div className="form-block">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                className="form-block-input"
                type="text"
                placeholder="Enter your email"
              />
              <button type="submit" disabled={formik.isSubmitting}>
                Subscribe
              </button>
            </div>
            <span className="form-error">
              {formik.errors && formik.touched.email && formik.errors.email && formik.errors.email}
            </span>
            <div className="form-block-check">
              <label>
                <input required className="form-checkbox" type="checkbox" />
              </label>
              <span className="form-agree">
                I AGREE TO BE ON THE SETTLE DOWN EMAIL LIST AND UNDERSTAND THAT I WILL RECEIVE
                OCCASIONAL EMAILS REGARDING GAME INFO, PROMOTIONS AND RELEASE INFORMATION.
              </span>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Subscribe;
