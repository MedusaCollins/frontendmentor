import React from 'react'
type Props = {
    dark: boolean,
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: any) => void
}


const Input:React.FC<Props> = ({dark, input, setInput, handleSubmit}) => {
  const theme = {
    light: 'bg-white border-gray-200 text-light-blue-400',
    dark: 'bg-dark-blue-600 border-dark-blue-500 text-dark-blue-100'
  }

  return (
    <form onSubmit={handleSubmit} className={`${!dark ? theme.light : theme.dark} grid grid-flow-col sm:grid-cols-12 grid-cols-6 items-center text-left rounded-md shadow-md`}>
        <div className={`border-2 ${!dark ? theme.light : theme.dark} w-6 h-6 rounded-full sm:col-span-1 col-span-1  ml-4`}></div>
        <input type="text"
        className={`${!dark ? theme.light : theme.dark} sm:col-span-11 col-span-5 h-14 ring-0 focus:outline-none rounded-r-md overflow-hidden pr-3`}
        placeholder='Create a new todo...'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}/>
    </form>
  )
}

export default Input