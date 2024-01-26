import React, { useEffect, useState } from 'react'
import { ITodo } from './types'

type Props = {
  dark: boolean,
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todos:React.FC<Props>= ({dark, todos, setTodos}): any => {
  const reversedTodos = [...todos].reverse();
  const [filter, setFilter] = useState<string>("all")
  const [filtered, setFiltered] = React.useState<ITodo[]>(reversedTodos)

  const theme = {
    light: 'bg-white border-gray-200 text-light-blue-400',
    dark: 'bg-dark-blue-600 border-dark-blue-500 text-dark-blue-100'
  }
  useEffect(() => {
    switch (filter) {
      case "all" : {
        setFiltered(reversedTodos)
        break;
      }
      case "active" : {
        setFiltered(reversedTodos.filter(todo => !todo.completed))
        break;
      }
      case "completed" : {
        setFiltered(reversedTodos.filter(todo => todo.completed))
        break;
      }
      default: {
        setFiltered(reversedTodos)
        break;
      }
    }
  }, [todos]) // eslint-disable-line
  return (
    <div className='space-y-0 shadow-md'>
    <div className={`rounded-t-md max-h-[300px] overflow-auto ${!dark ? theme.light : theme.dark}`}>
      {filtered.map((todo) => (
        <div 
        className={`grid sm:grid-cols-12 grid-cols-11 items-center overflow-auto text-left group border-b-2 ${!dark ? 'border-gray-200' : 'border-dark-blue-500'}`}
        onClick={() => setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === todo.id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))}
        >
          <div 
          className={`${todo.completed ? 'bg-gradient-to-br from-primary-cyan to-primary-purple': !dark ? 'border-2 ' + theme.light: 'border-2 '+theme.dark}
          w-6 h-6 rounded-full sm:col-span-1 col-span-2 ml-4 -mt-1`}> 
            {todo.completed && <div className='w-2 h-2 rounded-full bg-icon-check ml-2 mt-2'/>}
          </div>

          <div 
          className={`sm:col-span-10 col-span-7 h-14 ring-0 focus:outline-none rounded-r-md flex items-center overflow-hidden
          ${todo.completed && 'line-through text-light-blue-300'}`}>
            {todo.text}
          </div>
          <div className='w-6 h-6 -mt-2 sm:col-span-1 col-span-2'> 
            <button 
            className='w-6 h-6 rounded-full group-hover:bg-icon-cross bg-no-repeat bg-center ml-2'
            onClick={() => setTodos(todos.filter(prevTodo => prevTodo.id !== todo.id))}
            />
          </div>
        </div>
      ))}
      </div>
      {window.innerWidth <= 640 ? 
      <div className='space-y-5'>
      <div className={`p-3 rounded-b-md flex justify-between items-center ${!dark ? theme.light : theme.dark} text-light-blue-300`}>
        <p>{filtered.length} items left</p>
        <button 
        className={`${!dark ? 'hover:text-light-blue-400' : 'hover:text-dark-blue-100'}`}
        onClick={() => setTodos(todos.filter(todo => !todo.completed))}
        >Clear Completed</button>
      </div>
      <div className={`p-3 rounded-md flex justify-center gap-5 items-center ${!dark ? theme.light : theme.dark} text-light-blue-300`}>
        <button 
          className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'} 
          ${filter === "all" ? !dark ? 'text-light-blue-400' : 'text-dark-blue-200' : null}`}
          onClick={() => todos.length >= 1 && (setFilter("all"), setFiltered([...todos].reverse()))}>All
        </button>
        <button 
          className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'} 
          ${filter === "active" ? !dark ? 'text-light-blue-400' : 'text-dark-blue-200' : null}`}
          onClick={()=> todos.length >= 1 && (setFilter("active"), setFiltered(todos.filter(todo => !todo.completed).reverse()))}>Active
        </button>
        <button className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'} 
        ${filter === "completed" ? !dark ? 'text-light-blue-400' : 'text-dark-blue-200' : null}`}
          onClick={()=> todos.length >= 1 && (setFilter("completed"), setFiltered(todos.filter(todo => todo.completed).reverse()))}>Completed
        </button>
      </div>
      </div>
      : 
      <div className={`p-3 rounded-b-md flex justify-between items-center ${!dark ? theme.light : theme.dark} text-light-blue-300`}>
        <p>{filtered.length} items left</p>
        <div className='space-x-2'>
          <button 
            className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'}
             ${filter === "all" ? !dark ? ' text-light-blue-400' : 'text-dark-blue-200' : null}`}
            onClick={() => todos.length >= 1 && (setFilter("all"), setFiltered([...todos].reverse()))}>All
          </button>
          <button 
            className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'}
             ${filter === "active" ? !dark ? ' text-light-blue-400' : 'text-dark-blue-200' : null}`}
            onClick={()=> todos.length >= 1 && (setFilter("active"), setFiltered(todos.filter(todo => !todo.completed).reverse()))}>Active
          </button>
          <button className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'}
           ${filter === "completed" ? !dark ? ' text-light-blue-400' : 'text-dark-blue-200' : null}`}
            onClick={()=> todos.length >= 1 && (setFilter("completed"), setFiltered(todos.filter(todo => todo.completed).reverse()))}>Completed
          </button>
        </div>
        <button 
        className={`${!dark ? 'hover:text-light-blue-400 text-dark-blue-300' : 'hover:text-dark-blue-200 text-dark-blue-300'}`}
        onClick={() => setTodos(todos.filter(todo => !todo.completed))}
        >Clear Completed</button>
      </div>
      }
    </div>
  )
}

export default Todos