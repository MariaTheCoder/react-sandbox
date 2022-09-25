import List from "./List";

export default function Notepad(props) {
  return (
    <div className="Notepad">
      <List
        messages={props.messages}
        deleteItem={props.deleteItem}
        isBeingEdited={props.isBeingEdited}
        setIsBeingEdited={props.setIsBeingEdited}
      />
      <div>
        <label>Write a new message: </label>
        <input
          value={props.tempMessage}
          onChange={(event) => props.saveTemporaryMessage(event.target.value)}
        ></input>
        <button onClick={props.saveMessage}>Submit message</button>
      </div>
    </div>
  );
}
