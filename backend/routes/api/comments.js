const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, 

`router.get(`"/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
  //add another endpoint for deleting a comment
};