import React from 'react'
import logo from '../../public/assets/logo.png'
import Custombtn from '../layers/Custombtn'

const Navber = () => {
  return (
    <div className='bg-whitec'>
        <nav className='container !max-w-[1345px] my-4  between'>
          <a href="/"><img className='img' src={logo} alt="logo" /> </a>
            
            <ul className='between gap-4'>
                <li className='navli !text-main'>Home</li>
                <li className='navli'>About</li>
                <li className='navli'>Services</li>
                <li className='navli'>Project</li>
            </ul>
            <div className='between gap-3'>
              <Custombtn className='border-none' btntext='Contact us' />
              <Custombtn className='!bg-main !text-whitec border-none'  btntext='Book Now' />
            </div>
        </nav>

    </div>
  )
}

export default Navber