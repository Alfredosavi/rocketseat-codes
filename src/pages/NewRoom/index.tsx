import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/auth.scss";

export function NewRoom() {
  const { signInWithGoogle, user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    setDisable(true);

    if (newRoom.trim() === "") {
      setDisable(false);
      toast.warning("O campo está vazio!");
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    toast.success("Sala criada com sucesso!", {
      autoClose: 2500,
    });

    setTimeout(() => {
      history.push(`/rooms/${firebaseRoom.key}`);
    }, 2600);
  }

  async function handleChangeAccount() {
    await signInWithGoogle();
  }

  return (
    <div id="page-auth">
      <ToastContainer />
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúdidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit" disabled={disable}>
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
          <p className="account">
            Você está logado com: <strong>{`${user?.name}. `}</strong>
            <span onClick={handleChangeAccount}>Clique aqui</span> se deseja
            trocar de conta.
          </p>
        </div>
      </main>
    </div>
  );
}
