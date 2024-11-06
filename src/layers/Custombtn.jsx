import React from 'react'

const Custombtn = ({btntext,className}) => {
  return (
    <button className={` py-4 px-7 bg-transparent hover:bg-main text-[#333333] hover:text-whitec  rounded-md font-Roboto font-medium text-base ${className}`}>{btntext}</button>
  )
}

export default Custombtn