import React from 'react'
import P1 from '../layers/P1'
import helpbg from '../../public/assets/helpbg.png'
import aboutus from '../../public/assets/aboutus.png'
import aboutusbg from '../../public/assets/aboutusbg.jpg'

const Aboutus = () => {
  return (
    <div className='relative  mt-[82px]'>
      <img src={aboutusbg} alt="bg" />
      <div className='container grid grid-cols-2 gap-[102px] absolute top-0 left-1/2 -translate-x-1/2'>
        <div className='relative '>
            <img className='img mt-[164px]' src={helpbg} alt="" />
            <img className='img absolute top-[90px] left-[45px] rounded-[10px]' src={aboutus} alt="aboutus" />            
        </div>
        <div className='mt-[189px] px-3 '>
            <h2 className='h2 mb-3'>The Best help in cleaning the house.</h2>
            <P1 p='Our team professional and experienced. '/>
            <P1 p='Quick and efficient cleaning service. '/>
            <P1 p='100% satisfaction guaranteed. '/>
            <P1 p='Quick and efficient cleaning service. '/>
            <P1 p='Highly Discipline in Workplace. '/>
        </div>

    </div>
    </div>
  )
}

export default Aboutus