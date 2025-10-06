import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes.js";
import postsRouter from "./routes/posts.routes.js";
import commentsRouter from "./routes/comments.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
