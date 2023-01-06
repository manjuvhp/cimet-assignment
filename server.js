const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
const port = 8000;
const axios = require("axios");

app.get("/get-list", (req, res) => {
  const authToken = req.headers["auth-token"];

  const headers = {
    "Content-Type": "application/json",
    "Api-key": process.env.API_KEY,
    "Auth-token": authToken,
  };

  const body = {
    session_id: process.env.SESSION_ID,
  };
  axios
    .post("https://devcore02.cimet.io/v1/plan-list", body, {
      headers: headers,
    })
    .then((response) => {
      //   console.log("Status Code:", response.data?.data?.electricity);
      res.send(response.data);
    })
    .catch((err) => {
      //   console.log("Error: ", err.response);
      res.status(401);
      res.send(err.response?.data);
    });
});

app.post("/generate-auth-token", (req, res) => {
  const headers = {
    "Content-Type": "application/json",
    "Api-key": process.env.API_KEY,
  };
  const body = {};
  axios
    .post("https://devcore02.cimet.io/v1/generate-token", body, {
      headers: headers,
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      //   console.log("Error: ", err.response);
      res.status(401);
      res.send(err.response?.data);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
