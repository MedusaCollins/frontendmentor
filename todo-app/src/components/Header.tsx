import React from 'react'

type Props = {
    dark: boolean,
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<Props> = ({dark, setDark}) => {
  return (
    <h1 className='flex items-center justify-between text-3xl text-white font-bold' style={{letterSpacing: '0.5rem'}}>
      TODO
      <button className={`${dark ? 'bg-icon-sun' : 'bg-icon-moon'} w-6 h-6 bg-no-repeat -mt-2 bg-center`} onClick={() => setDark(!dark)}/>
</h1>
)}

export default Header