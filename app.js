const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const birthday = require("./routes/birthdayGet");

const app = express();
const publicPath = path.join(__dirname, "public");
const templatePath = path.join(__dirname, "views");

const port = process.env.PORT || 3000;

// Database Connection

mongoose
	.connect("mongodb://localhost:27017/birthday" || process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Database is connected");
	});

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", templatePath);
app.set("view engine", "ejs");

app.use("", birthday);

app.listen(port, () => {
	console.log("App is running on ", port);
});
