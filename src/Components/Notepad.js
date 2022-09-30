import List from "./List";
import { useState } from "react";

export default function Notepad(props) {
  const [tempMessage, setTempMessage] = useState("");

  function saveTemporaryMessage(msg) {
    setTempMessage(msg);
  }

  function buttonHandler() {
    props.createMessage(tempMessage);
    setTempMessage("");
  }

  return (
    <div className="Notepad">
      <List
        messages={props.messages}
        deleteItem={props.deleteItem}
        alterEditMode={props.alterEditMode}
      />
      <div>
        <label>Write a new message: </label>
        <input
          value={tempMessage}
          onChange={(event) => saveTemporaryMessage(event.target.value)}
        ></input>
        <button onClick={buttonHandler}>Submit message</button>
      </div>
    </div>
  );
}
