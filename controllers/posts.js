const Post = require("../models/post");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize s3 constructor
const { v4: uuidv4 } = require("uuid"); // import uuid to generate random ID's

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index
};

function create(req, res) {
  console.log(req.file, req.body, "this is create method", req.user);
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = {
      Bucket: BUCKET_NAME,
      Key: filePath,
      Body: req.file.buffer
    };
    s3.upload(params, async function (err, data) {
        try{
            const post = await Post.create({
                q1: req.body.q1,
                a1: req.body.a1,
                q2: req.body.q2,
                a2: req.body.a2,
                q3: req.body.q3,
                a3: req.body.a3,
                user: req.user,
                photoUrl: data.Location,
              });
            res.status(201).json({ post: post });
        } catch (err) {
            res.status(400).json({ err });
        }
    });
}

async function index(req, res) {
    try {
      // this populates the user when you find the posts
      // so you'll have access to the users information
      // when you fetch teh posts
      const posts = await Post.find({}).populate("user").exec();
      res.status(200).json({ posts: posts });
    } catch (err) {
      res.status(400).json({ err });
    }
  }
