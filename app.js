const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use((req, res, next) => {
  res.locals.path = req.path; // This makes the 'path' variable available in all views
  next();
});

const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(errorController.getError);
// create server on port 3000
app.listen(3000);
