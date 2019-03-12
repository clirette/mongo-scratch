const mongoose = require('mongoose');
const PostSchema = require('./post');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  postCount: {
    type: Number
  },
  posts: [PostSchema]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;