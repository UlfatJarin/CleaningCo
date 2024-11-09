import React from 'react'
import P1 from '../layers/P1'
import helpbg from '../../public/assets/helpbg.png'
import aboutus from '../../public/assets/aboutus.png'
import othority from '../../public/assets/othority.png'
import Custombtn from '../layers/Custombtn'
import AboutCard from '../layers/AboutCard'
import  circle from '../../public/assets/circle.png'


const Aboutus = () => {
  return (
     <div className='bg-lightmain3'>
       <div className='max-w-[1256px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[102px]   mt-[90px] '>
        <div className='relative md:mb-[90px]'>
            <img className='img mt-[164px]' src={helpbg} alt="" />
            <img className='img absolute top-[90px] left-[45px] rounded-[10px]' src={aboutus} alt="aboutus" />  
            <AboutCard className='absolute top-[367px] left-[118px]' Oname='A.J Hanna' position='CEO' src={othority} comment='Cleaning Co is one of the fastest-growing outsource service and cleaning service provider companies in the Bangladesh and abroad. Smart Force prides itself on being the pioneer outsource service company in-house and abroad.' />      
            
            <img className='circle w-[86px] h-[86px] absolute top-[188px] right-[-102px]' src={circle} alt="" />
            <img className='circle w-[42px] h-[42px] absolute top-[188px] right-0' src={circle} alt="" />    
        </div>
        <div className='mt-[189px] px-3 '>
            <h2 className='h2 mb-3'>The Best help in cleaning the house.</h2>
            <P1 p='Our team professional and experienced. '/>
            <P1 p='Quick and efficient cleaning service. '/>
            <P1 p='100% satisfaction guaranteed. '/>
            <P1 p='Quick and efficient cleaning service. '/>
            <P1 p='Highly Discipline in Workplace. '/>
            <Custombtn className='mt-8 !text-whitec !bg-main' btntext='Book Now'/>
        </div>
    </div>
     </div>
   
  )
}

export default Aboutus