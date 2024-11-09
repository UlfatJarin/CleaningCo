import React from 'react'
import PlanCard from '../layers/PlanCard'
import service4 from '../../public/assets/window.png'

const Plan = () => {
    return (
        <div className='container my-[90px]'>
            <div className='text-center'>
                <p className='p2 mb-2'>Pricing Plan</p>
                <h2 className='h2 mb-[59px]'>Choose Your best Plan </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
            <PlanCard title='Cleaning' price='$25.00' src={service4}/>
            <PlanCard title='Laundry Service' price='$25.00' src={service4}/>
            <PlanCard title='Outdoor Furniture' price='$25.00' src={service4}/>

            </div>
        </div>
    )
}

export default Plan