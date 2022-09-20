export default function List(props) {
  function deleteItem(number) {
    const messagesCopy = [...props.messages];
    messagesCopy.splice(number, 1);
    props.setMessages(messagesCopy);
  }

  return (
    <ul className="List">
      {props.messages.map((mes, index) => (
        <li key={index}>
          {mes}
          <button onClick={() => deleteItem(index)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}
