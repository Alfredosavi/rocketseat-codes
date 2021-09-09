import copyImg from "../../assets/images/copy.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.success("Código copiado!", {
      autoClose: 2000,
    });
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
