// Comment model

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	body: String,
	author: String,
	upvotes: {type: Number, default: 0},
	// create relationships with Post data model through ObjectID
	// 'ObjectID' stored in MongoDB - 'ref' is type of object of ID
	post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

mongoose.model('Comment', CommentSchema);