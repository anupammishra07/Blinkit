import React from "react";
import HomeBanner from "../Components/HomeBanner";
import HomeCategories from "../Components/HomeCategories";
import HomeProductsRow from "../Components/HomeProductsRow";
import AddNewAddress from "../Components/AddNewAddress";
import DeliveryBoy from "../Components/DeliveryBoy";
import Footerdivs from "../Components/Footerdivs";
export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <HomeCategories />
      <HomeProductsRow />
      <HomeProductsRow />
      <HomeProductsRow />
      <DeliveryBoy/>
      <Footerdivs/>
      
      {/* <AddNewAddress/> */}
    </div>
  );
}
