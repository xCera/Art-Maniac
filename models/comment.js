var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	text: String,
	createdAt: { type: Date, default: Date.now },
	author: {}
});

module.exports = mongoose.model('Comment', commentSchema);
