import React, { useContext } from "react";
import orderImage from '../assets/box.png';
import AppContext from "../Context/AppContext";
export default function OrderCard() {
  let appContext = useContext(AppContext);
  return (
    <div className="flex justify-between border border-gray-200 p-2 mt-2">
      <div className="flex space-x-3 items-center">
        <div>
            <img src={orderImage} className="h-8"/>
        </div>
        <div>
            <h2>ORD524179968 | ₹195 <span className="text-xs bg-winkit-yellow rounded-xl p-1">Delivered</span></h2>
            <p className="font-thin text-xs">Placed on sat, 10 sep'22, 9:00 pm</p>
        </div>

      </div>

      <div>
        <button className="border border-winkit-green rounded-md px-4 py-2 text-sm" onClick={()=>{ appContext.setViewDetails(true)}}>View Details</button>
      </div>
    </div>
  );
}
