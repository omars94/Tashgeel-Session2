export default function Task(props) {
  return (
    <div>
      {completed.map((i, index) => (
        <Task key={i.id} {...i} />
      ))}
    </div>
  );
}
