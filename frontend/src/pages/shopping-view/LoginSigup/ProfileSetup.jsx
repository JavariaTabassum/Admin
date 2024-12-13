import React from 'react'

function ProfileSetup() {
  return (
    <div className="flex justify-center items-center py-6 font-Roboto ">
      <div className="md:p-8 p-1 md:border md:border-[#E3E3E3]">
      <div className="w-[350px] md:w-[662px] space-y-4 flex flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-normal text-foreground">Profile Setup !</h1>
          <p className="text-[#767676] text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus
          </p>
        </div>
        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <p>Add Profile Picture</p>
        </div>
        <div className='gap-[2rem] md:flex md:items-center'>
  {/* First Column (Name & Address) */}
  <div className='md:w-1/2 w-full'>
    <div>
      <label className="block text-base text-black">Name</label>
      <input
        className="mt-2 w-full p-4 rounded-xl border border-black"
        placeholder="name"
        type="text"
        value="Alex"
      />
    </div>
    <div>
      <label className="block text-base text-black">Your Address</label>
      <input
        className="mt-2 w-full p-4 rounded-xl border border-black"
        placeholder="Your Address"
        type="text"
        value="Florida"
      />
    </div>
  </div>

  {/* Second Column (DOB & City) */}
  <div className='md:w-1/2 w-full'>
    <div>
      <label className="block text-base text-black">Date of Birth</label>
      <input
        className="mt-2 w-full p-4 rounded-xl border border-black"
        type="date"
        value="2024-10-22"
      />
    </div>
    <div>
      <label className="block text-base text-black">City</label>
      <input
        className="mt-2 w-full p-4 rounded-xl border border-black"
        placeholder="Florida"
        type="text"
      />
    </div>
  </div>
</div>




        <div className='gap-[2rem] md:flex md:items-center '>
        <div className='md:w-1/2 w-full'>
          <label className="block text-base text-black">
          Gender
          </label>
          <select className='w-full p-4 border-black border rounded-xl'> 
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div className='md:w-1/2 w-full'>
          <label className="block text-base text-black">
         Phone Number
          </label>
          <input
            className="mt-2 w-full p-4 rounded-xl border border-black"
            placeholder="Phone Number"
            type="text"
            value="1234567"
          />
        </div>
        </div>
        <button
          type="submit"
          className="md:w-1/2 w-full bg-primary self-center text-sm text-white uppercase p-4 rounded-lg"
        >
         Save
        </button>
       
      </div>
    </div>
    </div>
  )
}

export default ProfileSetup
