import React,{useContext} from "react";
import { Link } from "react-router-dom";
import winkitLogo from "../assets/images/logo.png";
import AppContext from '../Context/AppContext';
export default function Header() {
  let appContext = useContext(AppContext);

  return (
    <header className="bg-white ">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-3 flex items-center justify-between">
          {/* Logo Div */}
          <div>
            <Link to={"/"}>
            <img src={winkitLogo} className="h-10 w-auto" /></Link>
          </div>
          {/* delivery address */} 
          {/* <div className="w-auto">
            <h1>Delivery in 9 minutes</h1>
          </div> */}
          {/* search box div */}
          {/* <div className="max-w-7xl items-center">
            <input className="rounded-lg max-w-full  shadow-lg border-none " type="text"></input>
          </div> */}

          {/* Buttons Div */}

          <div className="inline-flex space-x-12 items-center">
            <a href="#" onClick={()=>{appContext.setLoginOpen(true)}}>Login</a>
            <a
              onClick={()=>{appContext.setCartOpen(true)}}
              className="bg-winkit-green inline-flex  py-2 px-4 rounded-md text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Cart
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
