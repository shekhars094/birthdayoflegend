const mongoose = require("mongoose");

const birthdaySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	DOB: {
		type: Date,
		required: true
	}
});

module.exports = mongoose.model("Birthday", birthdaySchema);
