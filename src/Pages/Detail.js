import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from 'Components/Navbar'
import axios from 'axios';

function Detail() {
    let { id } = useParams();
    const [coin, SetCoin] = useState(null)
    const getCoin = async () => {
      const {data} = await  axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      console.log(data);
      SetCoin(data)
    }

    useEffect(() => {
      getCoin()
    }, [])

  return (
    <div className='h-screen overflow-hidden flex flex-col justify-between items-center bg-black text-white'>
      <Navbar />
      <div className="w-[50%] h-[60%] bg-white/5 rounded flex flex-col items-center my-auto">
        <h1 className='text-[#FF5C28] text-[40px] font-semibold mt-10'>{coin?.name}</h1>
        <img src={coin?.image.large} alt={coin?.id} className="h-[150px] mt-5"/>
        <div className="w-[90%] h-[64%] flex items-center justify-center gap-y-6 flex-col">
          <h1 className='text-md font-semibold'>Symbol: {coin?.symbol}</h1>
          <h1 className='text-md font-semibold'>Current Price: {coin?.market_data.current_price.usd.toLocaleString()}</h1>
          <h1 className='text-md font-semibold'>Market Cap: {coin?.market_data.market_cap.usd.toLocaleString()}</h1>
          <h1 className='text-md font-semibold'>Total Volume: {coin?.market_data.total_volume.usd.toLocaleString()}</h1>
          <h1 className='text-md font-semibold'>24hr High: <span className='text-green-600'>${coin?.market_data.high_24h.usd.toLocaleString()}</span></h1>
          <h1 className='text-md font-semibold'>24hr Low: <span className='text-red-600'>${coin?.market_data.low_24h.usd.toLocaleString()}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Detail