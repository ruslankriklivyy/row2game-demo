const validateForm = ({ errors, values }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Enter your email address';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    },
    name: (value) => {
      if (!value) {
        errors.name = 'Enter your name';
      } else if (values.name.length >= 50) {
        errors.name = 'The name is too long';
      }
    },
    message: (value) => {
      if (!value) {
        errors.message = 'Enter your message';
      } else if (values.message.length < 20) {
        errors.message = 'The message is too short';
      } else if (values.message.length >= 100) {
        errors.message = 'The message is too long';
      }
    },
    // email: (value) => {
    //   if (!value) {
    //     errors.email = 'Enter your E-mail';
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //     errors.email = 'Incorrect E-mail';
    //   }
    // },
    // name: (value) => {
    //   if (!value) {
    //     errors.name = 'Enter your name';
    //   } else if (/^[a-zA-Z ]+$/i.test(value)) {
    //     errors.name = 'Incorrect name';
    //   }
    // },
    // message: (value) => {
    //   if (!value) {
    //     errors.message = 'Enter your message';
    //   } else if (value.length > 100) {
    //     errors.message = 'The message is too long';
    //   }
    // },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validateForm;
