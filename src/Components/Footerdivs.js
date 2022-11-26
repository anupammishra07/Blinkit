import React from 'react'
import darkfantasy from "../assets/images/products/winkit/dark-fantasy.jpg";
import easyreturns from "../assets/images/products/winkit/easy return.jpg"
import Superfast from "../assets/images/products/winkit/superfast.jpg"
import bestprice from "../assets/images/products/winkit/bestprices.jpg"
import wide from "../assets/images/products/winkit/wide.jpg"
export default function Footerdivs() {
  return (

        <>
    <div className='flex md:w-62 mx-auto justify-between max-w-7xl mt-10  items-center '>

        

        <div className='w-64 h-38  border border-gray-300 rounded-lg items-center p-8'>
                <img className=' w-38 h-32 justify-between rounded-full rounded-full' src={Superfast}/>
                <h1 className='font-bold '>Superfast Delivery</h1>
                <p className='text-sm font-thin'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
        </div>

        <div className='w-64 h-38 border border-gray-300 rounded-lg items-center p-8'>
        <img className=' w-38 h-32 justify-between rounded-full rounded-full' src={bestprice}/>
                <h1 className='font-bold '>Superfast Delivery</h1>
                <p className='text-sm font-thin'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
        </div>
        <div className='w-64 h-38 border border-gray-300 rounded-lg items-center p-8'>
        <img className='  w-38 h-32 justify-between rounded-full rounded-full' src={wide}/>
                <h1 className='font-bold  items-center'>Superfast Delivery</h1>
                <p className='text-sm font-thin'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
        </div>
        <div className='w-64 h-38 border border-gray-300 rounded-lg items-center p-8'>
        <img className=' w-38 h-32 justify-between rounded-full rounded-full' src={easyreturns}/>
                <h1 className='font-bold '>Superfast Delivery</h1>
                <p className='text-sm font-thin'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
        </div>
        
        
    </div>

   <hr className='mt-16 max-w-7xl mx-auto'></hr>

    <div className='mx-auto justify-between max-w-7xl mt-10  items-center text-[#a9a9a9] text-sm' >
        <p className='font-thin'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
    </div>


    <div className=' max-w-7xl mx-auto   grid grid-cols-3 gap-4 mt-8'>
    <div className=' grid grid-cols-3 gap-4 '>
    <h1 className='font-bold'>Categories</h1>
    
        

    </div>
        
        <div className=' '>
        <h1 className='font-bold'>Categories</h1>

        </div>
        <div className='justify-items-start  '>
        <h1 className='font-bold' >Festive Season</h1>

        </div>
    </div>

    
    </>




  )
}
