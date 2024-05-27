import { sequelize } from "../connectionDB.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define('user' , {
    name : {
        type: DataTypes.STRING,
        allowNull : false
    },
    email : {
        type: DataTypes.STRING,
        allowNull : false
    },
    password : {
        type: DataTypes.STRING,
        allowNull : false
    }
})

export default userModel