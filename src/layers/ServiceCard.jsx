import React from 'react'
import Custombtn from './Custombtn'
import  circle from '../../public/assets/circle.png'

const ServiceCard = ({src,title,description,className}) => {
  return (
    <div className={`max-w-[312px] p-8 bg-white hover:bg-lightmain2 rounded-[10px] relative overflow-hidden ${className}`}>
        <img className='img  mb-6' src={src} alt={src} />
        <h3 className='h3 '>{title}</h3>
        <p className='p !text-sm mt-4 mb-6  ' >{description}</p>
        <Custombtn  btntext='Book Now' />
        
        <img className='circle w-[191px] h-[191px] absolute top-[-55px] right-[-60px]' src={circle} alt="" />
\    </div>
  )
}

export default ServiceCard