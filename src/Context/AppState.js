import { useState } from "react";
import AppContext from "./AppContext";

export default function AppState(props){

  const [cartOpen,setCartOpen] = useState(false);
  const [loginOpen,setLoginOpen] = useState(false);
  const [addisOpen, setaddIsOpen] = useState(false);
  const [newaddressisOpen, setnewaddressIsOpen] = useState(false);
  const [viewdetails,setViewDetails]=useState(false);

  return(
    <AppContext.Provider value={{cartOpen,setCartOpen,loginOpen,setLoginOpen ,newaddressisOpen, setnewaddressIsOpen,viewdetails,setViewDetails}}>
      {props.children}
    </AppContext.Provider>
  )
}