import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import { Button } from "../../components/Button";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/auth.scss";

export function Home() {
  const { user, signInWithGoogle, logOut } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  // async function teste() {
  //   await logOut();
  // }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    setDisable(true);

    if (roomCode.trim() === "") {
      setDisable(false);
      toast.warning("O campo está vazio!");
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      setDisable(false);
      toast.error("A sala não existe!");
      return;
    }

    if (roomRef.val().endedAt) {
      setDisable(false);
      toast.error("Essa sala já foi fechada!");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo Google" />
            Crie sua sala com o Google
          </button>
          {/* <button onClick={teste}>teste</button> */}

          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit" disabled={disable}>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
