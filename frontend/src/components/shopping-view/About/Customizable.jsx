import React from 'react'

function Customizable(props) {
  return (
   <>
        <div className='lg:w-[50%] w-full px-4'>
          <div className='w-full relative'>
        {/* <h2 className='absolute bottom-0 rotate-[-90deg] px-3  font-Roboto font-normal h-full text-3xl uppercase'>Explore new and popular styles</h2> */}
        <img className="w-full h-full" src={props.image} alt="Custom Dress" />
        </div>
        </div>
        <div className='lg:w-[45%] w-full lg:px-0 px-6 py-2 self-center'>
            <h2 className='flex items-center md:text-[28px] text-lg font-normal font-satoshi gap-3 pb-4'><div className='p-3 bg-[#FF5555] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.4956 2.5L11.1941 7.70599C10.9401 8.72185 10.8132 9.22978 10.5487 9.64309C10.3148 10.0087 10.0043 10.3192 9.63869 10.5531C9.22538 10.8176 8.71745 10.9445 7.7016 11.1985L2.49561 12.5L7.7016 13.8015C8.71745 14.0555 9.22538 14.1824 9.63869 14.4469C10.0043 14.6808 10.3148 14.9913 10.5487 15.3569C10.8132 15.7702 10.9401 16.2782 11.1941 17.294L12.4956 22.5L13.7971 17.294C14.0511 16.2782 14.1781 15.7702 14.4425 15.3569C14.6765 14.9913 14.9869 14.6808 15.3525 14.4469C15.7658 14.1824 16.2738 14.0555 17.2896 13.8015L22.4956 12.5L17.2896 11.1985C16.2738 10.9445 15.7658 10.8176 15.3525 10.5531C14.9869 10.3192 14.6765 10.0087 14.4425 9.64309C14.1781 9.22978 14.0511 8.72185 13.7971 7.70599L12.4956 2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>Fully Customizable</h2>
<p className='md:text-xl text-[13px] text-[#000000] opacity-[0.6] capitalize font-satoshi font-normal'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
        </>
    
  )
}

export default Customizable
