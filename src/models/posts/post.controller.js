import postModel from "./../../../DB/models/post.model.js";

// create
export const createPost = async (req, res, next) => {
  const post = await postModel.create(req.body);
  res.json({ msg: "done" });
};

// read

export const getPost = async (req, res, next) => {
  const post = await postModel.findAll();
  return res.json({ msg: "done", post });
};

// update
export const updatePost = async (req, res, next) => {
  const post = await postModel.findByPk(req.params.id);
  if (!post) {
    return res.json({ error: "Post not found" });
  }
  if (post.userId !== req.user.id) {
    return res.json({ error: "you can't edit this post" });
  }
  const postToUpdate = await post.update(req.body);
  res.json({ msg: "done", postToUpdate });
};

// delete
export const deletePost = async (req, res, next) => {
  const post = await postModel.findByPk(req.params.id);
  if (!post) {
    return res.json({ error: "Post not found" });
  }
  if (post.userId !== req.user.id) {
    return res.json({ error: "you can't edit this post" });
  }
  const postToDelete = await post.update({ deleteAt: new Date() });
  return res.end();
};

// Get a specific post with the author
export const postWithAuther = async (req, res, next) => {
  const { id } = req.params;
  const post = await postModel.findOne({
    where: { id },
    include: {
      model: User,
      as: "author",
      attributes: ["id", "username", "email"],
    },
  });

  if (!post) {
    return res.json({ msg: "not found" });
  }

  res.json({ msg: "done", post });
};
