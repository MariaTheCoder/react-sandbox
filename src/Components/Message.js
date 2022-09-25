export default function List(props) {
  return (
    <li>
      {props.mes}
      <button onClick={() => props.deleteItem(props.index)}>DELETE</button>
    </li>
  );
}
