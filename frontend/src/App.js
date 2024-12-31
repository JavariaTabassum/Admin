<<<<<<< HEAD
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard';
import Sales from './pages/Admin/Sales';
import AllProducts from './pages/Admin/Allproduct';
import EditProducts from './pages/Admin/Editproduct';
import Status from './pages/Admin/Status';
import Order from './pages/Admin/Order';
import Shipping from './pages/Admin/Shipping';
import Profile from './pages/Admin/Profile';
import Profiled from './pages/Admin/Profiled';
import Message from './pages/Admin/Message';

=======
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
>>>>>>> 7bb2206dd608c449ccb18a39c7db3d8b1affd7d4

function App() {
  return (
    <Routes>
<<<<<<< HEAD
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/sales" element={<Sales />} />
    <Route path='/allproduct' element={<AllProducts />} />
    <Route path='/editproduct' element={<EditProducts />} />
    <Route path='/status' element={<Status />} />
    <Route path='/order' element={<Order />} />
    <Route path='/shipping' element={<Shipping />} />
    <Route path='/profile' element={<Profile />} />
    <Route path="/profiled" element={<Profiled />} />
    <Route path="/message" element={<Message />} />
  </Routes>
=======
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
>>>>>>> 7bb2206dd608c449ccb18a39c7db3d8b1affd7d4
  );
}

export default App;
