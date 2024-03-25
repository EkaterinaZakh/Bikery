const nodemailer = require('nodemailer');

const sendEmailNotification = async function (email, name) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'bikery24@mail.ru',
        pass: 'N2Z2cS9csdet9L3znfSz',
      },
    });

    const mailOptions = {
      from: 'bikery24@mail.ru',
      to: email,
      subject: 'Уведомление о регистрации',
      text: `Здравствуйте, ${name}! Вы успешно зарегистрировались на портале Bikery! Добро пожаловать!`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmailNotification;

// AyEoT{rpdY41 пароль от почты
// N2Z2cS9csdet9L3znfSz пароль именно для приложения
