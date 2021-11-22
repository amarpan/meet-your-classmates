const Post = require("../models/post");

module.exports = {
  createDislike,
  deleteDislike,
};

async function createDislike(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.dislikes.push({ username: req.user.username, userId: req.user._id });
    await post.save();
    res.status(201).json({ data: "dislike added" });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deleteDislike(req, res) {
  try {
    const post = await Post.findOne({
      "dislikes._id": req.params.id,
      "dislikes.username": req.user.username,
    });
    post.dislikes.remove(req.params.id);

    await post.save();
    res.json({ data: "dislike removed" });
  } catch (err) {
    res.status(400).json({ err });
  }
}
