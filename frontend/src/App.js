import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shopping-view/layout";
import Login from "./pages/shopping-view/LoginSigup/Login";
import ForgetPassword from "./pages/shopping-view/LoginSigup/ForgetPassword";
import CreateAccount from "./pages/shopping-view/LoginSigup/CreateAccount";
import ProfileSetup from "./pages/shopping-view/LoginSigup/ProfileSetup";
import Home from "./pages/shopping-view/HomePage/Home";
import ProductDetails from './pages/shopping-view/ProductDetails';
import AboutUs from "./pages/shopping-view/AboutUs";
import Cart from "./pages/shopping-view/Cart";
import Contact from "./pages/shopping-view/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
    <Route path="/" element={<Login />} />
    <Route path="create-account" element={<CreateAccount />} />
    <Route path="forget-password" element={<ForgetPassword />} />
    <Route path="profile-setup" element={<ProfileSetup />} />

  </Route>

      <Route path="/shopping-view" element={<Layout />}>

       <Route path="" element={<Home/>}/>
       <Route path="product-details" element={<ProductDetails />} />
       <Route path="about-us" element={<AboutUs />} />
       <Route path="cart" element={<Cart/>} />
       <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
