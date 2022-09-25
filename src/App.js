import { useState } from "react";
import "./App.css";
import Notepad from "./Components/Notepad";

export default function App() {
  const [messages, setMessages] = useState(["hello", "world"]);
  const [tempMessage, setTempMessage] = useState("");

  function deleteItem(index) {
    const messagesCopy = [...messages];
    messagesCopy.splice(index, 1);
    setMessages(messagesCopy);
  }

  function saveMessage() {
    const messagesCopy = [...messages];
    messagesCopy.push(tempMessage);
    setMessages(messagesCopy);
  }

  return (
    <div className="App">
      <Notepad
        messages={messages}
        setTempMessage={setTempMessage}
        saveMessage={saveMessage}
        deleteItem={deleteItem}
      />
    </div>
  );
}
