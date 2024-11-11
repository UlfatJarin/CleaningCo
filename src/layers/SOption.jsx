import React from 'react'

const SOption = ({title}) => {
  return (
    <div>
        <select className='w-[200px] md:w-[265px] p-4 border border-main rounded-[5px] between bg-whitec'>
            <option value={title}>{title}</option>
        </select>
    </div>
  )
}

export default SOption