// Post model that specifies what data to store
var mongoose = require('mongoose');

// declare initialization
var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: { type: Number, default: 0},
	// references Comment model in Mongoose
	// Mongoose will use populate() to retrieve all comments assoc. with Post
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Post', PostSchema);