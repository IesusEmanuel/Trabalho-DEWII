import express from "express";
//import bcrypt from "bcrypt";
import cors from "cors";
// import CSS from 'connect-session-sequelize';
//import sequelize from "./database/mysql.mjs";
import User from "./models/user.mjs";
import Jogo from "./models/jogo.mjs";

const app = express ()

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173'
    ]
}));

app.use(express.json());
app.use(express.urlencoded());

// app.post("/newJogos", async(req, res) => {
//     const hash = bcrypt.hashSync(req.body.senha, saltRounds);
//     const created = await User.create({
//         email: req.body.email,
//         senha: hash
//     });
//     res.json({ "email": created.email });
// })

app.post("/newJogos", async(req, res) => {
    console.log(req.body);
    const created = await Jogo.create({
        game_name: req.body.game_name,
        discount: req.body.discount,
        price: req.body.price,
        image: req.body.image
    });
    res.json(created);
})

app.put("/editJogos", async(req, res) => {
    const editedGame = await Jogo.findOne({
        where: { id:req.body.id }
    })
    editedGame.game_name = req.body.game_name
    editedGame.discount = req.body.discount
    editedGame.price = req.body.price
    editedGame.image = req.body.image

    await editedGame.save();
    
    res.json(editedGame);
});

// app.delete("/deleteGame", async(req, res) => {
//     const deletedGame = await Jogo.findOne({
//         where: { id:req.body.id }
//     });
//     await deletedGame.destroy();
//     res.json(deletedGame);
// });

app.delete("/deleteJogos", async(req, res)=> {
// const { id } = req.params;
  try {
    const excludedGame = await Jogo.findOne({ where: { id:req.body.id } });

    if (!excludedGame) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }
    await excludedGame.destroy();
    
    res.json({ message: 'Jogo excluído com sucesso', excludedGame });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o jogo', error });
  }
});

app.get("/listJogos", async (req, res) => {
    res.json(await Jogo.findAll());
})

app.get("/listUser", async (req, res) => {
    res.json(await User.findAll());
})

app.use(express.static("view"));

// RODADO
app.listen(3000, "127.0.0.1", () => {
    console.log('rodou');
})