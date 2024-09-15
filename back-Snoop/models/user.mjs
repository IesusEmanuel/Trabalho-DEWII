import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = sequelize.define('User', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING
});

User.prototype.validatePassword = function (senha) {
    return bcrypt.compare(senha, this.senha);
};

User.sync();


export default User;