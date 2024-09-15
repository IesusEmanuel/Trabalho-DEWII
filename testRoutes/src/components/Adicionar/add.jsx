import React, { useEffect, useRef, useState } from "react";
import "/src/App.css";
import "./add.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jogo from "/src/components/Jogo/jogo.jsx";

const insertGame = () => {
  toast.success("Jogo Adicionado com sucesso");
}

const editarGame = () => {
  toast.success("Jogo editado com sucesso");
}

const excludeGame = () => {
  toast.success("Jogo excluído com sucesso");
}

const Add = () => {
  const [game_name, setGame_name] = useState('');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState('');
  const [jogos, setJogos] = useState([]);
  const [id, setId] = useState(null);

  const form1 = useRef(null);

  const addGame = () => {
    if (game_name.trim() && image.trim() && discount.trim() && price.trim()) {

      const newGame = { game_name, image, discount, price };
      const options = { method: 'post', body: new URLSearchParams(newGame) };

      fetch("http://127.0.0.1:3000/newJogos", options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          insertGame();
          loadGame();
        })

      //setJogos([...jogos, newGame]);

      setGame_name('');
      setImage('');
      setDiscount('');
      setPrice('');
    }else {
      toast.warning("Erro ao cadastrar novo jogo");
    }
  }

  const loadGame = () => {
    fetch('http://127.0.0.1:3000/listJogos')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setJogos(json);
      })
  }

  useEffect(() => {
    loadGame();
  }, []);

  const editOrnew = (event) => {
    event.preventDefault();
    if (id == null) {
      addGame();
    } else {
      editGame();
    }
  }

  const selectEdit = (id, game_name, discount, price, image) => {
    setId(id);
    setGame_name(game_name);
    setImage(image);
    setDiscount(discount + '');
    setPrice(price + '');
  }

  const editGame = () => {
    if (game_name.trim() && image.trim() && discount.trim() && price.trim()) {

      const editGame = { id, game_name, image, discount, price };
      const options = { method: 'put', body: new URLSearchParams(editGame) };

      fetch("http://127.0.0.1:3000/editJogos", options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          editarGame();
          // location.reload();
          loadGame();
        })

      //setJogos([...jogos, newGame]);

      setGame_name('');
      setImage('');
      setDiscount('');
      setPrice('');
      setId(null);
    }
  }

  const deleteGame = async (id) => {
    const options = {
      method: 'DELETE',
      body: new URLSearchParams({ id: id })
    };

    fetch(`http://127.0.0.1:3000/deleteJogos`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao excluir o jogo');
        }
        return (res.json());
      })
      .then((json) => {
        excludeGame();
        //alert(json.message);
        loadGame();
      })
  }

  
  return (
    
    <>
    
    <ToastContainer />
      <form ref={form1} onSubmit={editOrnew}>
        <h1 className="center white poppins">Adicionar</h1>
        <input
          type="text"
          placeholder="Nome do Jogo"
          value={game_name}
          onChange={(e) => setGame_name(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Desconto"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button className="pointer transition" type="submit">Adicionar Jogo</button>
      </form>

      <div className="games-container align-container-center">
        {jogos.map((jogo, index) => (
          <Jogo key={index} id={jogo.id} game_name={jogo.game_name} price={jogo.price} discount={jogo.discount} image={jogo.image} deleteGame={deleteGame} selectEdit={selectEdit} />
        ))}
      </div>
    </>
  )
}

export default Add;