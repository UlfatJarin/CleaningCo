import React from 'react'
import { PiCheckDuotone } from 'react-icons/pi'

const P1 = ({p}) => {
  return (
    <div className='flex gap-2 items-center mt-3'>
        <PiCheckDuotone className='text-main' />
        <p className='p'>{p}</p>
    </div>
  )
}

export default P1