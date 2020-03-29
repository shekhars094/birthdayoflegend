const router = require("express").Router();
const birthday = require("../models/birthday");

router.get("", (req, res) => {
	birthday
		.find({})
		.then(dobs => {
			console.log(typeof dobs);
			res.render("index", { dobs: dobs });
		})
		.catch(err => {
			res.render("index", {});
		});
});

router.post("", (req, res) => {
	const birthdayDate = new birthday(req.body);
	birthdayDate
		.save()
		.then(dob => {
			console.log(`Successfuly Saved ${dob}`);
		})
		.catch(err => {
			console.log(`Something is wrong ${err}`);
		});
});

module.exports = router;
