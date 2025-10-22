// src/components/TodoList.jsx
import { ArrowRight, Calendar } from "lucide-react";

const TodoList = ({ title, date, tag, subtasks }) => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center bg-white border-b border-gray-100 rounded-md px-4 py-3  hover:shadow-md cursor-pointer transition">
            <input
                type='checkbox'
                className='w-5 h-5 cursor-pointer'
            />


            <div>
                <h2 className="text-gray-800 font-medium">{title}</h2>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    {date && (
                        <div className="flex items-center gap-1">
                            <Calendar size={12} /> {date}
                        </div>
                    )}
                    {subtasks && <span>{subtasks} Subtasks</span>}
                    {tag && (
                        <span
                            className={`text-xs px-2 py-0.5 rounded-md ${tag === "Personal"
                                ? "bg-red-100 text-red-600"
                                : "bg-yellow-100 text-yellow-700"
                                }`}
                        >
                            {tag}
                        </span>
                    )}
                </div>
            </div>


            <ArrowRight className='text-slate-400' />
        </div>
    );
};

export default TodoList;
