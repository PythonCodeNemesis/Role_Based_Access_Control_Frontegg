const express = require("express");
const { withAuthentication } = require("@frontegg/client");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const port = 13000;

// app.use("/dashboard", withAuthentication({ roles: ["admin"] }));
//app.use("/admin", withAuthentication({ roles: ["Admin"] }));

// Set up a route to handle user authorization using Frontegg's withAuthentication middleware
app.get(
  "/dashboard",
  withAuthentication({ roles: ["ReadOnly", "Admin"] }),
  (req, res) => {
    console.log("Frontegg context:", req.frontegg);
    const { email, roles } = req.frontegg.user;
    const fegg = req.frontegg.user;
    console.log(email, roles);
    res.send(`the user email is ${email} and they have roles ${roles}`);
  }
);

app.get(
  "/prioritypage",
  withAuthentication({ roles: ["Admin"] }),
  (req, res) => {
    console.log("Frontegg context:", req.frontegg);
    const { email, roles } = req.frontegg.user;
    const fegg = req.frontegg.user;
    console.log(email, roles);
    res.send(`the user email is ${email} and they have roles ${roles}`);
  }
);

// Set up a route to handle admin authorization using Frontegg's withAuthentication middleware
app.get(
  "/admin",
  withAuthentication({ roles: ["Admin"], permissions: ["read"] }),
  (req, res) => {
    res.send("Welcome, Admin!");
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
