import { useState } from 'react'; 
import Header from './components/Header'
import Input from './components/Input'
import Todos from './components/Todos';
import { ITodo } from './components/types';

const App:React.FC = () => {
  const [dark, setDark] = useState<boolean>(true)
  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id:Date.now(),
      text:input,
      completed: false,
    }
    setInput("");
    setTodos([...todos, newTodo]);
  }
  return (
    <div className={`h-screen w-screen flex justify-center mt-24 ${!dark ? 'bg-light-gray' : 'bg-dark-blue-700'}`}>
      {/* background */}
      <div className={`${!dark ? 'bg-desktop-dark' : 'bg-desktop-light'} h-[300px] w-full bg-cover top-0 absolute z-10`}/>

        <div className='sm:w-[40rem] w-[20rem] h-[400px] mx-5 space-y-12 z-20'>
          <Header dark={dark} setDark={setDark}/>
          <Input dark={dark} input={input} setInput={setInput} handleSubmit={handleSubmit}/>
          {(todos.length >= 1) && <Todos dark={dark} todos={todos} setTodos={setTodos}/>}
        </div>
    </div>
  );
}

export default App;
