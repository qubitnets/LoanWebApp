const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/apply", (req, res) => {
  const { fullName, email, phone, loanAmount } = req.body;

  if (!fullName || !email || !phone || !loanAmount) {
    return res.status(400).send("All fields are required.");
  }

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kirtisolanki140@gmail.com", 
      pass: "dutormfwtscixibz" ,    
    },
  });

  const mailOptions = {
    from: "kirtisolanki140@gmail.com",
    to: "kitisolanki140@gmail.com", 
    subject: "New Home Loan Application",
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Loan Amount: ${loanAmount}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email Error:", error);
      res.status(500).send("Failed to send application.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Application submitted successfully!");
    }
  });
 });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${5173}`);
});
