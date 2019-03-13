const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

const BlogPost = mongoose.model('blogPost', BlogPostSchema);
module.exports = BlogPost;