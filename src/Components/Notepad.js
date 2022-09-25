import List from "./List";

export default function Notepad(props) {
  return (
    <div className="Notepad">
      <List messages={props.messages} deleteItem={props.deleteItem} />
      <div>
        <label>Write a new message: </label>
        <input
          onChange={(event) => props.setTempMessage(event.target.value)}
        ></input>
        <button onClick={props.saveMessage}>Submit message</button>
      </div>
    </div>
  );
}
