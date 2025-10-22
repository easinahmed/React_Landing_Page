import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import Menu from '../components/Menu'
import DisplayTodo from '../components/DisplayTodo'
import DetailedTodo from '../components/DetailedTodo'
import AddTodo from '../components/AddTodo'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-start gap-8 p-8">
      {/* Sidebar / Menu */}
      <div>
        {!isOpen && (
          <MenuIcon
            className="cursor-pointer hover:text-blue-600 transition"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && <Menu onClose={() => setIsOpen(false)} />}
      </div>

      {/* Main */}
      <main className="space-y-5 w-full">
        <h1 className="text-4xl font-bold">
          Today
          <span className="text-slate-400 text-2xl ml-2">
            {/* (there will show all tasks) */}
          </span>
        </h1>
        
        <DisplayTodo />
      </main>

      {/* Detail panel */}
       <DetailedTodo />
    </div>
  )
}

export default Home
