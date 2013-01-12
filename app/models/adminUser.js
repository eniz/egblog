// adminUser schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var adminUserSchema = new Schema({
    name: String
  , email: String
  , username: String
  , password: String
});

mongoose.model('User', adminUserSchema);