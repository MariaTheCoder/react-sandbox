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
              isBeingEdited={props.isBeingEdited}
              setIsBeingEdited={props.setIsBeingEdited}
              deleteItem={props.deleteItem}
            />
          ))}
        </ul>
      )}
    </>
  );
}
