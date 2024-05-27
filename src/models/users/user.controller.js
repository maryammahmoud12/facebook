import userModel from "./../../../DB/models/user.model.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res, next) => {
  const users = await userModel.findAll();
  return res.json({ msg: "done", users });
};

// regression

export const regression = async (req, res, next) => {
  const { name, email, password } = req.body;
  const emailUnique = await userModel.findOne({ where: { email } });
  if (emailUnique) {
    return res.json({ msg: "user already exist" });
  }
  //  hash password of users
  const hashPass = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    name,
    email,
    password: hashPass,
  });
  return res.json({ msg: "user registered successfully", user });
};

// login

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    return res.json({ msg: "invalid email" });
  }
  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    return res.json({ error: "invalid password" });
  }
  return res.json({ msg: "login is done successfully" });
};

// logout
export const logout = (req, res, next) => {
  return res.json({ msg: "logout is done successfully" });
};
