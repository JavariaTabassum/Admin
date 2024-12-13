import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shopping-view/layout";
import Login from "./pages/shopping-view/LoginSigup/Login";
import ForgetPassword from "./pages/shopping-view/LoginSigup/ForgetPassword";
import CreateAccount from "./pages/shopping-view/LoginSigup/CreateAccount";
import ProfileSetup from "./pages/shopping-view/LoginSigup/ProfileSetup";

function App() {
  return (
    <Routes>
      <Route path="/shopping-view" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="profile-setup" element={<ProfileSetup />} />
      </Route>
    </Routes>
  );
}

export default App;
