const Post = require("../models/post");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize s3 constructor
const { v4: uuidv4 } = require("uuid"); // import uuid to generate random ID's

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index, 
  delete: deletePost
};

async function deletePost(req, res) {
  try{
    Post.findOne({ _id: req.params.postId })
    .populate("user")
    .exec((err,post)=>{
      if(err || !post){
        if(err instanceof Error){
          throw new Error(err)
        }
        throw new Error("couldn't find post")
      }
      if(post.user._id.toString() === req.user._id.toString()){
        post.remove()
        .then(result=>{
          res.json({message:"successfully deleted"})
        }).catch(err=>{
            console.log(err)
        })

      }
    })
  } catch (err) {
    res.status(400).json({ err });
}
}

async function index(req, res) {
  try {
    const posts = await Post.find({})
    .populate("user")
    .sort('-createdAt')
    console.log(posts)
    res.status(200).json({ posts: posts });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function create(req, res) {
  console.log(req.body, "this is create method", req.user);
        try{
            const post = await Post.create({
                q1: req.body.q1,
                a1: req.body.a1,
                q2: req.body.q2,
                a2: req.body.a2,
                q3: req.body.q3,
                a3: req.body.a3,
                user: req.user,
            
              });
              await post.populate('user')
            res.status(201).json({ post: post });
        } catch (err) {
            res.status(400).json({ err });
        }
}