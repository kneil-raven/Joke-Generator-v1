const giveMeAJoke = require("give-me-a-joke");
const express = require("express");

const app = express();

// use public directory
app.use(express.static("public"));

// EJS code to display the template, use EJS as view engine
app.set("view engine", "ejs");

// create GET root route
app.get("/", (req, res) => {
  //   console.log(giveMeAJoke);
  giveMeAJoke.getRandomDadJoke(function (joke) {
    res.render("jokes", { jokeList: joke });
  });
});

// create LISTEN route
app.listen(3000, () => {
  console.log(`running in port ${3000}`);
});
