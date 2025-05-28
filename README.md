# Session 2 – JSX, Components, and Props in ReactJS

## 📚 Topics Covered

- What is JSX and why we use it
- JSX syntax rules (className, single root, JS expressions)
- Functional vs Class components
- What are Props and how to pass them
- Reusable component patterns

---

## 🎯 Session Goals

By the end of this session, students should be able to:

- Write JSX that combines HTML with JavaScript expressions
- Understand the difference between functional and class components
- Use props to pass data between components
- Create and reuse components with dynamic content
- Render multiple components using props

---

## 🧪 Lab Task (Given in Class)
# 
🧪 ReactJS Lab Task – To-Do List App (with Bugs)
🎯 Objective
You are provided with a scaffolded ReactJS project for a To-Do List App. It contains reusable components and a basic structure—but it has intentional bugs and missing functionality.

Your task is to:

Fix the issues in the code.

Implement full functionality including:

Adding tasks

Viewing pending and completed tasks in separate lists

Reusing a task component for both

🔧 Features to Implement
 Add a new task using a text input and an "Add" button (Button.jsx - Input.jsx)

 View active tasks in a "To-Do" list (Todolist.jsx)
 
 Text Component for completed Tasks and pending tasks (CustomText.jsx)

 Mark tasks as completed (Checkbox.js)

 Move completed tasks to a separate "Completed" list (Completed.jsx)

 Use a reusable TaskItem component for both to-do and completed tasks (Task.js)

 (Optional Bonus) Delete a task - Toggle Tasks between pending and completed

💾 Project Structure Overview

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


🚀 Instructions
Clone the repository:

    git clone https://github.com/omars94/Tashgeel-Session2.git
    cd Tashgeel-Session2
    npm install
    npm run dev

Review the file structure and find planted bugs or missing logic.

Complete the functionality described above using React best practices:
for Todolist.jsx (please continue using a class based component)

Test your app and make sure it runs smoothly.