import postModel from "../../../DB/models/post.model.js";
import userModel from "../../../DB/models/user.model.js";
import commentModel from "./../../../DB/models/comment.model.js";

// create
export const createComment = async (req, res, next) => {
  const comment = await commentModel.create(req.body);
  res.json({ msg: "done" });
};

// read

export const getComment = async (req, res, next) => {
  const comment = await commentModel.findAll();
  return res.json({ msg: "done", comment });
};

// update
export const updateComment = async (req, res, next) => {
  const { content } = req.body;
  const { id } = req.params;
  const comment = await commentModel.update(
    { content },
    {
      where: {
        id,
      },
    }
  );
  if (!comment[0]) {
    return res.json({ msg: "comment not found" });
  }
  return res.json({ msg: "done" });
};

// delete
export const deleteComment = async (req, res, next) => {
  const { id } = req.params;
  const comment = await commentModel.destroy({
    where: {
      id,
    },
  });
  if (!comment) {
    return res.json({ msg: "comment not found" });
  }
  return res.json({ msg: "done" });
};

// Special endpoint to get a specific user with a specific post and post’s comments.

export const endPoint = async (req, res, next) => {
  const { userId, postId } = req.params;
  const user = await userModel.findOne({
    where: { id: userId },
    include: {
      model: postModel,
      where: { id: postId },
      include: {
        model: commentModel,
        include: {
          model: userModel,
        },
      },
    },
  });
  if(!user){
    return res.json({msg : "not found"})
  }
  return res.json({msg : "done" , user})
};
