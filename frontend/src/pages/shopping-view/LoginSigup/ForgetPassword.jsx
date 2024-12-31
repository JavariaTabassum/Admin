import React from 'react'

function ForgetPassword() {
  return (
    <div className="flex justify-center items-center py-6 font-Roboto ">
      <div className="md:p-[4rem] md:border md:border-[#E3E3E3]">
      <div className="w-[345px] space-y-4 flex flex-col px-4">
        <div className="text-center">
          <h1 className="text-2xl font-normal text-foreground">Forget Password?</h1>
          <p className="text-[#767676] text-base font-normal">
          Please enter the email address that you provided while creating your account
          </p>
        </div>
        <div>
          <label className="text-base text-black">
            Email address
          </label>
          <input
            className="mt-2 w-full p-4 rounded-sm border border-[#E3E3E3]"
            placeholder="Enter Email address..."
            type="email"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-sm text-white uppercase p-4 rounded-lg"
        >
        Send Verification link
        </button>
      </div>
    </div>
    </div>
  )
}

export default ForgetPassword
