import React from "react";
import { Link } from "react-router-dom";
import { fbIcon,google } from "../../../assets/ShoppingAssets";

function Login() {
  return (
    <div className="flex justify-center items-center py-6 font-Roboto ">
      <div className="md:p-[4rem] md:border md:border-[#E3E3E3]">
      <div className="w-[345px] px-4 space-y-4 flex flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-normal text-foreground">LOGIN NOW</h1>
          <p className="text-[#767676] text-base font-normal">
            Please enter your credentials to get started.
          </p>
        </div>
        <div>
          <label className="text-base text-black">
            Email address or Phone number
          </label>
          <input
            className="mt-2 w-full p-4 rounded-sm border border-[#E3E3E3]"
            placeholder="Enter Email address or Phone number"
            type="text"
          />
        </div>
        <div>
          <label className="text-base text-black">Password</label>
          <input
            className="mt-2 w-full p-4 rounded-sm border border-[#E3E3E3]"
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Link to={"forget-password"} className="decoration-none self-end text-[#195EED] text-base font-normal">
          Forget Password?
        </Link>
        <div className="self-start  text-[#767676] flex gap-x-1 items-center text-base">
          <input type="checkbox" />
          Keep me Signed in
        </div>
        <Link to={"/shopping-view"}
          type="submit"
          className="w-full bg-primary text-center text-sm text-white uppercase p-4 rounded-lg"
        >
          Login
        </Link>
        <div className="self-center text-base text-[#767676]">
          or login with
        </div>
        <div className="border-[#D0D5DD] rounded-sm p-4 border w-full flex items-center gap-2 justify-center border text-[#344054] text-base font-medium">
         
                     <img src={google} alt="Google Icon" />Sign in with Google
        </div>
        <div className="border-[#D0D5DD] rounded-sm p-4 border w-full flex gap-2 items-center justify-center border text-[#344054] text-base font-medium">
        <img src={fbIcon} alt="Facebook Icon" /> Sign in with Facebook
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;