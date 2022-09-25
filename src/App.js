import { useState } from "react";
import "./App.css";
import Notepad from "./Components/Notepad";

export default function App() {
  const [messages, setMessages] = useState([
    { id: "0", text: "hello", editMode: false },
    { id: "1", text: "world", editMode: false },
  ]);
  const [tempMessage, setTempMessage] = useState("");

  function alterEditMode(mes) {
    let messagesCopy = [...messages];

    const foundIndex = messagesCopy.findIndex((m) => m.id === mes.id);

    messagesCopy[foundIndex].editMode = !messagesCopy[foundIndex].editMode;
    setMessages(messagesCopy);
  }

  function deleteItem(index) {
    const messagesCopy = [...messages];
    messagesCopy.splice(index, 1);
    setMessages(messagesCopy);
  }

  function saveTemporaryMessage(msg) {
    setTempMessage(msg);
  }

  function saveMessage() {
    const messagesCopy = [...messages];
    messagesCopy.push({ text: tempMessage, editMode: false });
    setMessages(messagesCopy);
    setTempMessage("");
  }

  return (
    <div className="App">
      <Notepad
        messages={messages}
        tempMessage={tempMessage}
        alterEditMode={alterEditMode}
        saveTemporaryMessage={saveTemporaryMessage}
        saveMessage={saveMessage}
        deleteItem={deleteItem}
      />
    </div>
  );
}
