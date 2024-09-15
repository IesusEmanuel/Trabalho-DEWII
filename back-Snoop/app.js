import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
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

app.post("/newUser", async(req, res) => {
    console.log(req.body);
    const saltRounds = 10;

    const hash = bcrypt.hashSync(req.body.password_user, saltRounds);
    const created = await User.create({
        email: req.body.name_user,
        senha: hash
    });
    res.json(created);
})

// app.post("/loginUser", async(req, res) => {
//     const { name_user, password_user } = req.body;
    
//     // Verifique se o email e a senha são fornecidos
//     if (!name_user || !password_user) {
//         return res.status(400).json({ logged: false, message: 'Email e senha são obrigatórios' });
//     }

//     // Encontre o usuário e verifique a senha
//     const user = await User.findOne({ where: { name_user } });

//     if (user && await bcrypt.compare(password_user, user.password_user)) {
//         // Sucesso
//         req.session.userId = user.id; // Armazene a sessão se necessário
//         res.json({ logged: true });
//     } else {
//         // Falha
//         res.json({ logged: false });
//     }
// })

app.post("/loginUser", async(req, res) => {
    const { name_user, password_user } = req.body;

    try {
        const user = await User.findOne({ where: { username: name_user } });

        if (!user || !(await user.validatePassword(password_user))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('Login bem-sucedido para o usuário:', name_user);
        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

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