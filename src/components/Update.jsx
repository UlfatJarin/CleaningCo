import React from 'react'
import UpdateCard from '../layers/UpdateCard'
import update1 from '../../public/assets/update1.jpg'
import update2 from '../../public/assets/update2.jpg'
import update3 from '../../public/assets/update3.jpg'
import update4 from '../../public/assets/update4.jpg'

const Update = () => {
  return (
    <div className='container'>
         <div className=''>
            <p className='p2 mb-2'>Team Members</p>
            <h2 className='h2 mb-[59px]'>Our Expert members </h2>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <UpdateCard src={update1} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update2} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update3} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update4} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
        </div>
    </div>
  )
}

export default Update