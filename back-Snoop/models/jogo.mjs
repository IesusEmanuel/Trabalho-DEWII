import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const Jogo = sequelize.define('Jogo', {
    game_name: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING
});


Jogo.sync();


export default Jogo;