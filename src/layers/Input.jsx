import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Input = ({id,type,placeholder,labeltext}) => {
  return (
    <div className='w-[200px] md:w-[265px] pr-4 border border-main rounded-[5px] between bg-whitec'>
        {/* <label htmlFor="id">{labeltext}</label> */}
        <input className='p-4  rounded-md border-none'  id={id} type={type} placeholder={placeholder}/>
        <IoIosArrowDown />
    </div>
  )
}

export default Input