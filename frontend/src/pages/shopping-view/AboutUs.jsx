import React from 'react'
import Collections from '../../components/shopping-view/About/Collections';
import Customizable from '../../components/shopping-view/About/Customizable';
import { customImage1,customImage2 } from '../../assets/ShoppingAssets';
import SeeCollection from '../../components/shopping-view/About/SeeCollection';

function AboutUs() {
  return (
    <>
    <Collections/>
    <div className='flex lg:flex-row flex-col gap-8 lg:px-14 flex-row py-6 justify-center items-stretch'>
    <Customizable image={customImage1}/>
    </div>
    <div className='flex  lg:flex-row-reverse flex-col gap-8 lg:px-14 py-6 justify-center items-stretch'>
        <Customizable image={customImage2}/>
    </div>
    <SeeCollection/>
    </>
  )
}

export default AboutUs
