import React from 'react'
import  contectimg from '../../public/assets/contectimg.png'
import  gpay from '../../public/assets/gpay.png'
import  applestore from '../../public/assets/applestore.png'
import  circle from '../../public/assets/circle.png'

const Contect = () => {
  return (
    <div className='bg-lightmain3'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='mt-[52px] mx-auto relative'>
                <img src={contectimg} alt="contectimg" />
                <img className='circle w-[86px] h-[86px] absolute top-[40px] right-[-50px]' src={circle} alt="" />
                <img className='circle w-[42px] h-[42px] absolute top-[103px] right-[77px]' src={circle} alt="" />
            </div>
            <div className='max-w-[435px] my-3 md:my-[235px]'> 
                <h3 className='h2 !text-2xl !font-normal'>Stay Connected by Phone</h3>
                <p className='p my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tincidunt nisl, morbi aliquet gravida. Lorem adipiscing urna.</p>
               <div className='flex gap-4'>
                <img src={gpay} alt="gpay" />
                <img src={applestore} alt="applestore" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Contect