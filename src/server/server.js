const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files if needed (like public folder)
// app.use(express.static("public"));

// POST endpoint to handle loan application form
app.post("/apply", (req, res) => {
  const { fullName, email, phone, loanAmount } = req.body;

  if (!fullName || !email || !phone || !loanAmount) {
    return res.status(400).send("All fields are required.");
  }

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kirtisolanki140@gmail.com", // your Gmail address
      pass: "dutormfwtscixibz"     // app password from Google (NOT your Gmail password)
    },
  });

  const mailOptions = {
    from: "kirtisolanki140@gmail.com",
    to: "kitisolanki140@gmail.com", // You can change it to another receiving address
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
