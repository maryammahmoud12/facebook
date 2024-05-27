import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mysql://u1lvd1n9mfxyflr0:6H2At6g8iOux48sGw7my@b4xh3mlxqqzrkxttaaq4-mysql.services.clever-cloud.com:3306/b4xh3mlxqqzrkxttaaq4",
  { dialect: "mysql" }
);

const connection = async () => {
  return await sequelize
    .sync({ alter: false, force: false })
    .then(() => {
      console.log("connection done");
    })
    .catch((err) => {
      console.log({ msg: "fail to connect to DB", err });
    });
};

export default connection;
