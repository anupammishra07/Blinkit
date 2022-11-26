import React from 'react'
import { useContext } from 'react';
import { Dialog } from "@headlessui/react";
import AppContext from '../Context/AppContext';
import BillDetails from './BillDetails';

export default function ViewDetails() {
    let appContext = useContext(AppContext);
  return (
    // viewdetails,setViewDetails
    <Dialog
      open={appContext.viewdetails}
      onClose={() => appContext.setViewDetails(false)}
      className="relative z-50 h-80"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30 " aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* The actual dialog panel  */}
        <div className="bg-white w-1/2 shadow-lg">
          <div className="flex justify-start hover:cursor-pointer mt-4 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6"
            onClick={()=>{appContext.setViewDetails(false)}}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            
          </div>
          <div className="max-w-sm mx-auto text-center text-lg font-thin">
            <h2>Arrived at 09:07 pm in just 7 minutes! </h2>
          </div>
          <div className="text-center text-sm mt-4">
            <h3>placed on sat ,10 sep'22 , 9:00 pm</h3>
          </div>
          <div className="px-12 py-8">
            <div className="relative mt-1  shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
                
              </div>
              <p className='text-md'>payment mode</p>
              <p className='text-sm'>paid online</p>
              <p className='text-md font-bold mt-3'>Bill Details</p>
              <div className="text-xs mt-3 text-gray-500 flex justify-between">
                    <h3>MRP</h3>
                    <h3>Rs 100</h3>
                </div>
              
              
            </div>
            <div className="text-xs mt-3 text-gray-500 flex justify-between">
        <h3>Delivery Charges</h3>
        <h3>Rs 10</h3>
      </div>
      <div className="text-xs mt-3 text-gray-500 flex justify-between">
        <h3>Final Paid Amount</h3>
        <h3>Rs 195</h3>
      </div>
      <p className='text-md font-bold mt-3'>Delivery Address</p>
      <div className="text-xs mt-2 text-black flex justify-between">
        <h3>bbd complex near crown mall</h3>
        
      </div>
            
            <button
                type="button"
                className="mt-4 w-full text-center justify-center  inline-flex items-center rounded-sm border border-transparent bg-winkit-green px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-winkit-green focus:ring-offset-2"
              >
               Custom Support
              </button>
          </div>
    
        </div>
      </div>
    </Dialog>
  )
}
