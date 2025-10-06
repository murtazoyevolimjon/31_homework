import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
} from "../controllers/posts.controller.js";
const postRouter = Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getOnePost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

export default postRouter;
