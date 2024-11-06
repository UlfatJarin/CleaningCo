import React from 'react'
import Custombtn from './Custombtn'

const ServiceCard = ({src,title,description,className}) => {
  return (
    <div className={`max-w-[312px] p-8 bg-white hover:bg-lightmain2 rounded-[10px] ${className}`}>
        <img className='img  mb-6' src={src} alt={src} />
        <h3 className='h2 !text-[20px] '>{title}</h3>
        <p className='p !text-sm mt-4 mb-6  ' >{description}</p>
        <Custombtn className='border border-main ' btntext='Book Now' />
    </div>
  )
}

export default ServiceCard