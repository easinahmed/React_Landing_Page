// src/components/DetailedTodo.jsx
import { Calendar, Tag, Trash2, CheckSquare, Plus } from "lucide-react";

const DetailedTodo = () => {
    return (
        <div className="w-96 max-h-screen min-h-[1000px] bg-white border-l border-gray-200 p-6 flex flex-col ">
            {/* Task details */}
            <div className="space-y-5">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800">Task Details:</h1>
                <div>
                    <input
                        type="text"
                        value="Consult accountant"
                        readOnly
                        className="text-lg font-semibold text-gray-800 w-full bg-transparent border-none focus:outline-none"
                    />
                </div>

                {/* Description */}
                <div>
                    <textarea
                        value="Talk about the new tax return deadlines and potential deductions for the upcoming fiscal year."
                        readOnly
                        className="w-full text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-200 resize-none focus:outline-none"
                        rows={4}
                    />
                </div>

                {/* List Selector */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">List</span>
                    <select className="text-sm bg-gray-100 border border-gray-200 rounded-md px-2 py-1 outline-none text-gray-700">
                        <option>Personal</option>
                        <option>Work</option>
                        <option>List 1</option>
                    </select>
                </div>

                {/* Due Date */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Calendar size={14} /> Due Date
                    </span>
                    <span className="text-sm text-gray-700">22 Oct 2025</span>
                </div>

                {/* Tags */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 flex items-center gap-2">
                            <Tag size={14} /> Tags
                        </span>
                        <button className="text-xs text-blue-600 hover:underline">+ Add Tag</button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">Finance</span>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-md">Important</span>
                    </div>
                </div>

                {/* Subtasks */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 flex items-center gap-2">
                            <CheckSquare size={14} /> Subtasks
                        </span>
                        <button className="text-xs text-blue-600 hover:underline">+ Add Subtask</button>
                    </div>

                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="accent-blue-600" />
                            Review documents
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-600" />
                            Prepare notes
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-600" />
                            Call accountant
                        </li>
                    </ul>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-20">
                <button className="flex items-center gap-2 cursor-pointer  text-gray-500 border rounded-md border-gray-300 px-6 py-2 hover:text-red-600 text-sm font-medium">
                    <Trash2 size={16} /> Delete
                </button>
                <button className="bg-yellow-400 text-black  cursor-pointer px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition">
                    Update
                </button>
            </div>
        </div>
    );
};

export default DetailedTodo;
