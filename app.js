// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser"); // might use
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/projects/Inventory.html", (req, res) => {
  res.sendFile(__dirname + "/public/projects/Inventory.html");
});


app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/public/contact-me.html");
});


app.listen(3000, () => {
  console.log("server running on port 3000");
});




app.get("/app-tracker", (req, res) => {
  // res.sendFile(__dirname + "/public/projects/app-tracker.html");
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("error in switch");
  }

  res.render("tracker", {
    kindOfDay: day
  });
});
