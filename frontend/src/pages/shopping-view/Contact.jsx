import React from 'react'
import GetInTouch from '../../components/shopping-view/GetInTouch'
import ContactInfo from '../../components/shopping-view/ContactInfo'

function Contact() {
  return (
    <>
    <div className='py-[4rem] flex lg:flex-row flex-col justify-center items-center gap-4 lg:items-stretch lg:px-14 px-8 '>
        <p className='lg:hidden block text-[#717171] text-sm font-normal font-[Poppins] text-center py-2'>Any question or remarks? Just write us a message!</p>
    <ContactInfo/>
      <GetInTouch/>
      </div>
    </>
  )
}

export default Contact
