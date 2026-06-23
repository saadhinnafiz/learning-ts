// Types and global variables

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
};

let nextTaskId = 5;

// To-do list array

const todoList: Todo[] = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false,
    priority: "high",
  },
  {
    id: 2,
    task: "Take out the trash",
    completed: true,
    priority: "medium",
  },
  {
    id: 3,
    task: "Finish coding exercise",
    completed: false,
    priority: "high",
  },
  {
    id: 4,
    task: "Send email to suzan",
    completed: true,
    priority: "low",
  },
];

// Function to add new todolist task

function addTodo(task: string, priority: "low" | "medium" | "high"): Todo {
  const addNewTask: Todo = {
    id: nextTaskId++,
    task,
    completed: false,
    priority,
  };
  todoList.push(addNewTask);
  return addNewTask;
}

addTodo("Go to the beach", "medium"); // new task added with id 5
addTodo("Buy coffee", "high"); // new task added with id 6

// Function to complete todo task

function completeTodo(id: number): Todo | undefined {
  const selectedTask = todoList.find((task) => task.id === id);
  if (!selectedTask) {
    console.error(`Selected task ID ${id} not found`);
    return;
  }
  selectedTask.completed = true;
  return selectedTask;
}

completeTodo(6); // task with id 6 completed = true

// Function to filter by task priority

function getByPriority(priority: "low" | "medium" | "high"): Todo[] {
  return todoList.filter((task) => task.priority === priority);
}

// Function to delete todo task

function deleteTodo(id: number): Todo[] | undefined {
  const selectedTask = todoList.find((task) => task.id === id);
  if (!selectedTask) {
    console.error(`Selected task ID ${id} not found`);
    return;
  }
  const index = todoList.indexOf(selectedTask);
  todoList.splice(index, 1);
  return todoList;
}

deleteTodo(4);

console.log(todoList);
