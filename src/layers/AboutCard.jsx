import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

const AboutCard = ({ Oname,position,comment,src ,className }) => {
    return (
        <div className={`bg-whitec max-w-[461px] mx-auto py-8 px-4 rounded-[10px] ${className}`}>
            <div className=' max-w-[389px] between border-b border-[#ADADAD] pb-4 pr-4'> 
                <div className='flex gap-2.5 items-center'>
                    <div className='w-[70px] h-[70px] rounded-full object-cover '>
                        <img  src={src} alt={src} />
                    </div>
                    <div>
                        <h3 className=' h3 !font-bold'>{Oname}</h3>
                        <p className='p1 !text-[#838383]'>{position}</p>
                    </div>
                </div>
                <div className='flex  gap-3.5'>
                    <FaPhoneAlt className='text-2xl text-[#ADADAD]' />
                    <IoMailOutline className='text-2xl text-[#ADADAD]' />
                </div>
            </div>
                <p className='p1 !text-[#6A6A6A] mt-4'>{comment}</p>
        </div>
    )
}

export default AboutCard