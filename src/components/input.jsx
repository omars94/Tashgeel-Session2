export default function Input(props) {
  const { placeholder, onChangeText, value } = props;
  return (
    <input placeholder={placeholder} value={value} onChange={onChangeText} />
  );
}
