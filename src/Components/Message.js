import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditMode from "./EditMode";

export default function Message(props) {
  const [mes, setMes] = useState(props.mes.text);

  return (
    <li>
      <EditMode
        messageObject={props.mes}
        mes={mes}
        alterEditMode={props.alterEditMode}
        setMes={setMes}
      />
      <button onClick={() => props.deleteItem(props.index)}>
        DELETE <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
