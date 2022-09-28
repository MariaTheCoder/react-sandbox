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
    const isBeingEdited = props.isBeingEdited;
    if (isBeingEdited) {
      return (
        <input value={props.text} onChange={(e) => setMes(e.target.value)} />
      );
    }
    return <span>{props.text}</span>;
  }

  return (
    <li>
      {/* {props.mes.text} */}
      <EditMode isBeingEdited={props.mes.editMode} text={mes} />
      {!props.mes.editMode ? (
        <button
          onClick={() => {
            props.alterEditMode(props.mes);
          }}
        >
          EDIT <FontAwesomeIcon icon={faEraser} />
        </button>
      ) : (
        <button
          onClick={() => {
            props.alterEditMode(props.mes);
            // console.log(props.mes.editMode);
          }}
        >
          SAVE <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      )}
      <button onClick={() => props.deleteItem(props.index)}>
        DELETE <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
