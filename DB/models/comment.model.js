import { sequelize } from "../connectionDB.js";
import { DataTypes } from "sequelize";
import userModel from "./user.model.js";
import postModel from "./post.model.js";

const commentModel = sequelize.define("comment", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

commentModel.belongsTo(postModel, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

postModel.hasMany(commentModel);

commentModel.belongsTo(userModel, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

userModel.hasMany(commentModel);

export default commentModel;
