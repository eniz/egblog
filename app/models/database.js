
var mongoose = require('mongoose');
var Schema   = mongoose.Schema,
	ObjectId = Schema.ObjectId

var Database = {};

// Admin User Schema only username, password
var AdminUserSchema = new Schema({
	username: String,
	password: String
});

// Post Schema 
var PostSchema = new Schema({
	id: { type: Number, required: true, unique: true, index: true },
	author: { type : ObjectId, ref : 'AdminUser'},
	title : { type: String },
	content: { type: String },
	shortContent: { type: String },
	comments: [ { type: ObjectId, ref : 'Comment'}],
	postedDate: { type: Date, index:true, default: Date.now },
	editedDate: { type: Date, default: Date.now }
});

// CommentSchema
var CommentSchema = new Schema({
	commenter: String,

});

var AdminUser = mongoose.model('AdminUser', AdminUserSchema),
	Post      = mongoose.model('Post', PostSchema);
