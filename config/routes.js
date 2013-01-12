

var mongoose = require('mongoose'),
	post     = mongoose.model('Post')

var posts = require('admin/controllers/posts');
app.get('/posts', posts.index);