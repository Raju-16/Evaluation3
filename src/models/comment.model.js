const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
