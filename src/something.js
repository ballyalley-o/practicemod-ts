let express = require("express");
let app = express();

const mySecret = process.env["MESSAGE_STYLE"];

app.use(__dirname + "/json");

app.get("/", (req, res, next) => {
  let response = "Hello json";
  if (mySecret === "uppercase") {
    response = mySecret.toUpperCase();
  }
  res.send(response);
  next();
});


module.exports = app;
