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


function App() {
  return (
    <Routes>
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
  );
}

export default App;
