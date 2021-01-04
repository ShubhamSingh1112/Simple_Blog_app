const express = require("express");
const app = express();

const path = require("path");
const session = require("express-session");
const bodyParser  = require("body-parser");

const _PORT = 3000;
const index = require("./routes/index");
const blog = require("./routes/blogs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "This is a test",
    resave: false,
    saveUninitialized: true
}));

app.use("/", index);
app.use("/blog", blog);

app.listen(_PORT, () => {
    console.log("The server is listening on port " + _PORT);
})