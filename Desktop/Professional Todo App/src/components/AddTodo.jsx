import { Plus } from 'lucide-react'
import React from 'react'

const AddTodo = () => {
  return (
  
        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-md px-4 py-3  cursor-pointer hover:bg-gray-50 transition">
        <Plus size={18} className="text-gray-500" />
        {/* There will come a input box for adding ask while clicking */}
        <span className="text-gray-600 text-sm">Add New Task</span>
      </div>
   
  )
}

export default AddTodo