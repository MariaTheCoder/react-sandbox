import { faEraser, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditMode(props) {
  const isBeingEdited = props.messageObject.editMode;
  if (isBeingEdited) {
    return (
      <>
        <input
          value={props.mes}
          onChange={(e) => props.setMes(e.target.value)}
        />
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
      <span>{props.mes}</span>
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
