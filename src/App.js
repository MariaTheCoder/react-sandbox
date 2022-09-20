import { useState } from "react";
import "./App.css";
import Notepad from "./Components/Notepad";

export default function App() {
  const [messages, setMessages] = useState(["hello", "world"]);
  const [tempMessage, setTempMessage] = useState("");
  return (
    <div className="App">
      <Notepad
        messages={messages}
        setMessages={setMessages}
        tempMessage={tempMessage}
        setTempMessage={setTempMessage}
      />
    </div>
  );
}
