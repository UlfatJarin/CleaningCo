import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Input = ({id,type,placeholder,labeltext}) => {
  return (
    <div className='max-w-[265px] p-4 border border-main rounded-[5px] between bg-whitec'>
        {/* <label htmlFor="id">{labeltext}</label> */}
        <input  id={id} type={type} placeholder={placeholder}/>
        <IoIosArrowDown />
    </div>
  )
}

export default Input