// src/components/DisplayTodo.jsx
import { Plus, Calendar } from "lucide-react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const DisplayTodo = () => {
  return (
    <div className="flex-1 bg-white h-screen p-6 overflow-y-auto">
      

      {/* Add New Task */}
    <AddTodo/>

      {/* Task list section */}
      <div className="mt-6 space-y-3">
        <TodoList
          title="Research content ideas"
        />
        <TodoList
          title="Create a database of guest authors"
        />
        <TodoList
          title="Renew driver’s license"
          date="22-03-22"
          tag="Personal"
          subtasks={1}
        />
        <TodoList
          title="Consult accountant"
          tag="List 1"
          subtasks={3}
        />
        <TodoList
          title="Print business card"
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
