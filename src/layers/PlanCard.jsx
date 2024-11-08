import React from 'react'
import P1 from './P1'
import Custombtn from './Custombtn'

const PlanCard = ({src,price,title}) => {
  return (
    <div className='max-w-[424px] py-9 px-10 text-left border border-lightmain2 hover:border-main hover:bg-lightmain3 rounded-[5px] '>
        <img className='img' src={src} alt={src} />
        <h3 className='h2 !text-main !text-xl mt-4'>{title}</h3>
        <p className='h2 !text-[36px] my-6'>{price}</p>
        <div className='flex flex-col gap-2'>
        <P1 p='1 Bathroom cleaning'/>
        <P1 p='Up to 3 bedrooms cleaning'/>
        <P1 p='1 Livingroom cleaning'/>
        <P1 p='Small kitchen (0 - 150 ft2)'/>
        <P1 p='Up to 2 additional rooms cleaning'/>
        </div>
        <Custombtn className='border border-lightmain2 mt-12' btntext="Book Now"/>
    </div>
  )
}

export default PlanCard