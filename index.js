import express from "express";
import connection from "./DB/connectionDB.js";
import userRouter from "./src/models/users/user.routes.js";
import postRouter from "./src/models/posts/post.routes.js";
import commentRouter from "./src/models/comments/comment.routes.js";

const app = express();
const port = process.env.port || 3000;

connection();

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`));
