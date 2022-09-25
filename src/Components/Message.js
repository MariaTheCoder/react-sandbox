import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List(props) {
  return (
    <li>
      {props.mes}
      <button onClick={() => console.log("edit me")}>
        EDIT <FontAwesomeIcon icon={faEraser} />
      </button>
      <button onClick={() => props.deleteItem(props.index)}>
        DELETE <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
