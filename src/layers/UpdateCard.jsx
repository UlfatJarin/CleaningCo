import React from 'react'
import Custombtn from './Custombtn'

const UpdateCard = ({ src, title, date, by, comments, Descriptions }) => {
  return (
    <div className='max-w-[313px] p-3 flex flex-col gap-4 border border-lightmain2 rounded-[10px]'>
      <img src={src} alt={src} />
      <h3 className='h3'>{title}</h3>
      <div className='flex between'>
        <p className=' p !text-sm '> {date}</p>
        <div className='w-[1px] h-3.5 bg-secondary'></div>
        <p className='p !text-sm'>{by}</p>
        <div className='w-[1px] h-3.5 bg-secondary'></div>
        <p className='p !text-sm'>{comments} </p>
      </div>
      <p className='p'> {Descriptions}</p>
      <Custombtn btntext='Countinue Reading' />
    </div>
  )
}

export default UpdateCard