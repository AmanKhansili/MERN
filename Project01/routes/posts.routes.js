import express from "express";

const PostsRouter = express.Router();

//@route  GET api/posts
//@desc   Test Rooute
//@access Public
PostsRouter.get("/", (req, res, next) => res.send("Posts route"));

export default PostsRouter;
