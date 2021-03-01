import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs // Send email with email.js
    .sendForm('service_ltmor2u', 'template_9whqjrd', e.target, 'user_8ZOBvukgCZfx0y4Vjm41o')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  e.target.reset();
};

export default sendEmail;
