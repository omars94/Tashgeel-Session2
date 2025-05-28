export default function Button(props) {
  return (
    <button onClick={props.onClick}>
      <p>{props.label}</p>
    </button>
  );
}
