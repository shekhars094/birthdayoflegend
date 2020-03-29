const router = require("express").Router();
const birthday = require("../models/birthday");

router.get("", (req, res) => {
	birthday
		.find({})
		.then(dobs => {
			console.log(typeof dobs);
			res.render("index", { dobs: dobs });
		})
		.catch(err => {});
});

router.post("", (req, res) => {
	const birthdayDate = new birthday(req.body);
	birthdayDate
		.save()
		.then(dob => {
			console.log(`Successfuly Saved ${dob}`);
			res.redirect("/");
		})
		.catch(err => {
			console.log(`Something is wrong ${err}`);
		});
});

router.post("/delete/:id", (req, res) => {
	const id = req.params.id;

	console.log(id);

	birthday
		.findOneAndDelete({ _id: id })
		.then(data => {
			res.redirect("/");
		})
		.catch(err => {
			res.json({ err: `${err}` });
		});
});

module.exports = router;
