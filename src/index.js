const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const morgan = require("morgan");

// Setttings
app.set("port", 3001);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Middleware
app.use(morgan("dev"));

// Static

app.use(express.static(path.join(__dirname, "public")));

// Routes

app.use(require("./routes/index"));

// Listening Server
app.listen(app.get("port"), () => {
  console.log("Server Listening in the port:", app.get("port"));
});
