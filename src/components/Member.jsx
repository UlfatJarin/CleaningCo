import React from 'react'
import MemberCard from '../layers/MemberCard'
import member1 from '../../public/assets/member1.jpg'
import member2 from '../../public/assets/member2.jpg'
import member3 from '../../public/assets/member3.jpg'
import member4 from '../../public/assets/member4.jpg'

const Member = () => {
  return (
    <div className='container mt-4'>
        <div className=''>
                <p className='p2 mb-1'>Team Members</p>
                <h2 className='h2 mb-[48px]'>Our Expert members </h2>
        </div>
        <div className='grid grid-cols-4 gap-6 mb-16'>
            <MemberCard src={member1} title='Jecissa Gomes' description='House Cleaner'/>
            <MemberCard src={member2} title='Jecissa Gomes' description='House Cleaner'/>
            <MemberCard src={member3} title='Jecissa Gomes' description='House Cleaner'/>
            <MemberCard src={member4} title='Jecissa Gomes' description='House Cleaner'/>
        </div>
    </div>
  )
}

export default Member