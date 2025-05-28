import React from "react";
import Completed from "./Completed";
import Task from "./Task";
import Input from "../components/input";
import Button from "../components/Button";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completed: [],
      newTask: "",
    };
  }

  addNewTask() {}
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <p> To do List app </p>
        <Input
          placeholder="Add Task"
          onChangeText={(e) => this.setState({ newTask: e.target.value })}
          value={this.state.newTask}
        />
        <Button
          label="ADd"
          onPress={() => {
            this.setState({
              tasks: [
                ...this.state.tasks,
                { name: this.state.newTask, completed: false },
              ],
              newTask: "",
            });
          }}
        />
        {this.state.tasks.map((i, index) => (
          <Task key={index} {...i} />
        ))}
        {/* <Completed completed={this.state.completed}/> */}
      </div>
    );
  }
}
