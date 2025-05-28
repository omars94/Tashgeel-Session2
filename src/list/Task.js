import CheckBox from "../components/Checkbox";
import CustomText from "../components/CustomText";

const Task = (props) => {
  return (
    <div>
      <CheckBox></CheckBox>
      <CustomText>{props.task.name}</CustomText>
    </div>
  );
};
export default Task;
