import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "./logo.svg"

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='px-10 flex flex-row items-center justify-center py-2 w-full'>
        <div className="h-10 flex mr-auto flex-row items-center">
            <img src={logo} className="h-[90%] p-1 bg-white/10 rounded"/>
            <h1 className='ml-3 text-[16px] font-[400] text-white/70 tracking-wider'>CryptoChecker</h1>
        </div>

        <ul className='flex gap-3 items-center justify-centers text-lg text-[15px] font-[400]'>
            <li onClick={() => navigate('/')} className='cursor-pointer hover:text-white/70 transition-all duration-150'>Home</li>
            {/* <button className='px-5 py-1 rounded-full hover:text-[#FF5C28]/50 hover:border-[#FF5C28]/50 transition-all duration-300 active:scale-95 border-[0.1rem] border-[#FF5C28] text-[#FF5C28]'>Login</button>*/}
        </ul>
    </div>
  )
}

export default Navbar