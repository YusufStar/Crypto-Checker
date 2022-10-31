import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Content() {
    const navigate = useNavigate()
    const [data, SetData] = useState([])
    const [search, SetSearch] = useState("")
    const GetData = async() => {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(data);
        SetData(data)
    }

    useEffect(() => {
        GetData()
    }, [])

  return (
    <div className='px-3 flex flex-col items-center h-screen mt-5 w-[95%]'>
        <div className="w-[100%] h-[100%] flex flex-col items-center">
            <h1 className='pb-5 text-4xl font-[300]'>Welcome To <span className='text-[#FF5C28]'>CryptoChecker</span></h1>
            <div className="w-80 flex flex-row items-center">
                <input value={search} onChange={(e) => SetSearch(e.target.value)} type="text" placeholder='Enter Crypto Name' className='bg-transparent w-72 outline-none placeholder:text-white/50 text-white border-b-2 border-b-[#FF5C28]'/>
                <span onClick={() => GetData()} class="ml-2 cursor-pointer material-symbols-outlined">
                    cached
                </span>
            </div>
            <div className="w-[100%] max-w-[100%] min-w-[1000px] flex flex-col pt-10 h-[80%] gap-3 overflow-x-hidden overflow-y-auto">
                {data.filter((item) => {
                    if(search === "") {
                        return item
                    } else if (item?.name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map((item, i) => (
                    <div key={i} className='w-[100%] max-w-[100%] flex flex-row items-center justify-around flex-shrink-0 h-[50px] border-b-2 border-b-white/50'>
                        <div className="h-full w-[50px]">
                            <img src={item?.image} alt={item?.name} className="h-[90%]"/>
                        </div>
                        <div className="w-[150px]">
                            <h1 className='font-semibold text-base'>{item?.name}</h1>
                        </div>
                        <div className="w-[10px]">
                            <h1 className='font-semibold text-lg'>{item?.symbol}</h1>
                        </div>
                        <div className="w-[30px]">
                            <h1 className='font-semibold text-lg'>${item?.current_price.toFixed(2)}</h1>
                        </div>
                        <div className="w-[100px]">
                            <h1 className={`font-semibold text-lg`}>{item?.market_cap.toLocaleString()}</h1>
                        </div>
                        <div className="w-[20px]">
                            <h1 className={`font-semibold text-lg ${item?.price_change_percentage_24h < 0 ? "text-red-600":"text-green-600"}`}>{item?.price_change_percentage_24h}</h1>
                        </div>
                        <div className="w-[75px]">
                            <button onClick={() => {navigate(`/detail/${item?.id}`)}} className='px-5 py-1 rounded-full hover:text-[#FF5C28]/50 hover:border-[#FF5C28]/50 transition-all duration-300 active:scale-95 border-[0.1rem] border-[#FF5C28] text-[#FF5C28]'>Detail</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Content