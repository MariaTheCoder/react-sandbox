import Message from "./Message";

export default function List(props) {
  return (
    <>
      {props.messages.length <= 0 ? (
        <p>No messages</p>
      ) : (
        <ul className="List">
          {props.messages.map((mes, index) => (
            <Message
              key={index}
              index={index}
              mes={mes}
              deleteItem={props.deleteItem}
              alterEditMode={props.alterEditMode}
            />
          ))}
        </ul>
      )}
    </>
  );
}
