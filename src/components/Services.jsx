import React from 'react'
import ServiceCard from '../layers/ServiceCard'
import service1 from '../../public/assets/Residential.png'
import service2 from '../../public/assets/Commercial.png'
import service3 from '../../public/assets/Event.png'
import service4 from '../../public/assets/Window.png'
import service5 from '../../public/assets/Outdoor.png'
import service6 from '../../public/assets/Laundray.png'
import service7 from '../../public/assets/Car.png'
import service8 from '../../public/assets/Sofa.png'

const Services = () => {
  return (
    <div className='container py-[90px]'>
        <div className='max-w-[553px] mb-12'>
        <h2 className='h2'>Professional Care and Services</h2>
        <p className='p'>Advancing Cleaning & Outsourced Staff Service through Skilled Management.
        Cleaning Driving And Security Service</p>
        </div>
        <div className='grid grid-cols-4 gap-6 '>
            <ServiceCard src={service1} title='Residential Cleaning' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service2} title='Commercial Cleaning' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service3} className='!bg-lightmain2' title='Event Cleanup' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service4} title='Window Cleaning' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service5} title='Outdoor Furniture' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service6} title='Laundray Service' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service7} title='Car Wash' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
            <ServiceCard src={service8} title='Sofa Cleaning' description='You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.'  />
        </div>
    </div>
  )
}

export default Services