import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import CategoryPage from './Pages/CategoryPage';
import SingleCategoryPage from './Pages/SingleCategoryPage'
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import AccountPage from "./Pages/AccountPage";
import AddNewAddress from "./Components/AddNewAddress";
import ViewDetails from "./Components/ViewDetails";

function App() {
  return (
    <>
   
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/category" element={<CategoryPage/>}>
          <Route path=":categoryId" element={<SingleCategoryPage/>} />
        </Route>

        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>


      </Routes>
      

      <Cart />
      <Login/>
      <AddNewAddress/>
      <ViewDetails/>
      
    </>
  );
}

export default App;


