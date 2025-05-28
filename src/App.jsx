import "./App.css";
import TodoList from "./list/Todolist";

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

// Input component
// Button component
// Todolist components
// checkbox for completed or not
// Text for todolist item
// completed Section
// Slashed Text for todolist item

//one possible way for structure

// src
// ----components
// --------input.jsx
// --------button.jsx
// --------checkbox.jsx
// --------customText.jsx
// list
// --------task.jsx
// --------todolist.jsx
// --------completed.jsx
