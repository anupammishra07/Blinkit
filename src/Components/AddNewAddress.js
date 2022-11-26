import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import AppContext from '../Context/AppContext';

export default function AddNewAddress() {
    let appContext = useContext(AppContext);
    
 
  return (
    <Dialog
    open={appContext.newaddressisOpen}
    onClose={() => appContext.setnewaddressIsOpen(false)}
    className="relative z-80"
  >
    {/* The backdrop, rendered as a fixed sibling to the panel container */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

    {/* Full-screen container to center the panel */}
    <div className="fixed inset-0 flex items-center justify-center p-4">
      {/* The actual dialog panel  */}
      <div className="bg-white w-112 shadow-lg">
        <div className="flex justify-end p-3 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={()=>{appContext.setnewaddressIsOpen(false)}}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="max-w-md mx-auto text-center text-lg font-thin">
          <h2>Add new Delivery Address </h2>
        </div>
        <div className="text-center text-sm mt-4">
          <h3>Please Enter the Accurate address , it will help us to serve you better</h3>
        </div>
        <div className="px-8 py-4">
          <div className="relative mt-1  shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg> */}
            </div>
            <p>Area/Locality
            <input
              type="text"
              name="Area"
              id="Area"
              className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm"
              
            /></p>
            
            <p className='mt-4'>Name
            <input
              type="text"
              name="Area"
              id="Area"
              className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm mt-4"
              
            /></p>

<p className='mt-4'>Flat/House No/Office No.
            <input
              type="text"
              name="Area"
              id="Area"
              className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm mt-4"
              
            /></p>

            <p className='mt-4'>Street/Society/Office Name
            <input
              type="text"
              name="Area"
              id="Area"
              className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm mt-4"
              
            /></p>
          
      




          </div>
          <button
              type="button"
              className="mt-4 w-full text-center justify-center  inline-flex items-center rounded-sm border border-transparent bg-winkit-green px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-winkit-green focus:ring-offset-2"
            >
             Send OTP
            </button>
        </div>
  
      </div>
    </div>
  </Dialog>

  )
}
