import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Sender Email",
    pass: "password",
  },
});

const mailOptions = {
  from: "Sender Email",
  to: "Receiver Email",
  subject: "Mail Object",
  text: "Testing nodemailer",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info.response);
  }
});
