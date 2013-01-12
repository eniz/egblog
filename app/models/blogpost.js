// BlogPost schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var getTags = function (tags) {
  return tags.join(',')
}

var setTags = function (tags) {
  return tags.split(',')
}
// Schema maps to a MongoDB collection an
var BlogPostSchema = new Schema({
  , id:      { type : Number, required: true, unique: true, index: true }
  , title:   { type : String }
  , author:  { type : String }
  , content: { type : String }
  , shortContent: { type: String }
  , categories: []
  , comments: [{ type : Schema.ObjectId, ref : 'Comment'}]
  , tags: { type: [], get: getTags, set: setTags}
  , ext_link: { type: String }
  , postedDate    : { type: Date, index: true, default: Date.now },
  , editedDate    : { type: Date, default: Date.now },

});

mongoose.model('BlogPost', BlogPostSchema);