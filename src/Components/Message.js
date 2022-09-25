import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faTrash,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

export default function List(props) {
  return (
    <li>
      {props.mes}
      {!props.isBeingEdited ? (
        <button onClick={() => props.setIsBeingEdited(!props.isBeingEdited)}>
          EDIT <FontAwesomeIcon icon={faEraser} />
        </button>
      ) : (
        <button onClick={() => props.setIsBeingEdited(!props.isBeingEdited)}>
          SAVE <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      )}
      <button onClick={() => props.deleteItem(props.index)}>
        DELETE <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
