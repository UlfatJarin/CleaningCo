import React from 'react'
import UpdateCard from '../layers/UpdateCard'
import update1 from '../../public/assets/update1.jpg'
import update2 from '../../public/assets/update2.jpg'
import update3 from '../../public/assets/update3.jpg'
import update4 from '../../public/assets/update4.jpg'
import  circle from '../../public/assets/circle.png'

const Update = () => {
  return (
    <div className='container mt-12 mb-20'>
         <div className='max-w-[575px] relative'>
            <p className='p mb-2'>Recent Blogs</p>
            <h2 className='h2 mb-[32px]'>Latest News & Updates</h2>
            
            <img className='circle w-[86px] h-[86px] absolute bottom-[9px] right-[-155px]' src={circle} alt="" />
            <img className='circle w-[42px] h-[42px] absolute bottom-[-3px] right-[-39px]' src={circle} alt="" />
        </div>
        <div className='grid grid-cols-4 gap-4 '>
          <UpdateCard src={update1} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update2} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update3} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
          <UpdateCard src={update4} title='The Secret of Cleaning your office' date='Nov 03, 2021' by='By Berwyn' comments='32 Comments' Descriptions='Berwyn, PA, November 1st, 2021 — SpacePointe (Dayton, OH), a fintech solutions-up […]'/>
        </div>
    </div>
  )
}

export default Update