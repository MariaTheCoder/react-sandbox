import List from "./List";

export default function Notepad(props) {
  function clickHandler() {
    const messagesCopy = [...props.messages];
    messagesCopy.push(props.tempMessage);
    props.setMessages(messagesCopy);
  }

  return (
    <div className="Notepad">
      <List messages={props.messages} setMessages={props.setMessages} />
      <div>
        <label>Write a new message: </label>
        <input
          onChange={(event) => props.setTempMessage(event.target.value)}
        ></input>
        <button onClick={clickHandler}>Submit message</button>
      </div>
    </div>
  );
}
