import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faTrash,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Message(props) {
  const [mes, setMes] = useState(props.mes.text);

  function EditMode(props) {
    const isBeingEdited = props.messageObject.editMode;
    if (isBeingEdited) {
      return (
        <>
          <input value={props.text} onChange={(e) => setMes(e.target.value)} />
          <button
            onClick={() => {
              props.alterEditMode(props.messageObject);
            }}
          >
            SAVE <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
        </>
      );
    }
    return (
      <>
        <span>{props.text}</span>
        <button
          onClick={() => {
            props.alterEditMode(props.messageObject);
          }}
        >
          EDIT <FontAwesomeIcon icon={faEraser} />
        </button>
      </>
    );
  }

  return (
    <li>
      <EditMode
        messageObject={props.mes}
        text={mes}
        alterEditMode={props.alterEditMode}
      />
      <button onClick={() => props.deleteItem(props.index)}>
        DELETE <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
