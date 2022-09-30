import { useState } from "react";
import "./App.css";
import Notepad from "./Components/Notepad";
import uniqid from "uniqid";

export default function App() {
  const [messages, setMessages] = useState([]);

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

  function createMessage(tempMessage) {
    const messagesCopy = [...messages];
    messagesCopy.push({ id: uniqid(), text: tempMessage, editMode: false });
    setMessages(messagesCopy);
  }

  return (
    <div className="App">
      <Notepad
        messages={messages}
        setMessages={setMessages}
        createMessage={createMessage}
        alterEditMode={alterEditMode}
        deleteItem={deleteItem}
      />
    </div>
  );
}
