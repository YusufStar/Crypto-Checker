import Content from 'Components/Content'
import Navbar from 'Components/Navbar'
import React from 'react'

function Home() {
  return (
    <div className='h-screen overflow-hidden flex flex-col items-center bg-black text-white'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home