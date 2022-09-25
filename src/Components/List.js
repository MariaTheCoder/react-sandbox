import Message from "./Message";

export default function List(props) {
  return (
    <ul className="List">
      {props.messages.map((mes, index) => (
        <Message
          key={index}
          index={index}
          mes={mes}
          deleteItem={props.deleteItem}
        />
      ))}
    </ul>
  );
}
