import React from 'react'
import P1 from './P1'
import Custombtn from './Custombtn'

const PlanCard = ({src,price,title,p}) => {
  return (
    <div>
        <img className='img' src={src} alt={src} />
        <h3 className='h2 !text-main !text-xl'>{title}</h3>
        <p className='h2 !text-[36px] my-6'>{price}</p>
        <P1 p={p}/>
        <Custombtn className='bg-lightmain2' btntext="Book Now"/>
    </div>
  )
}

export default PlanCard