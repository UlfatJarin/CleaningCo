import React from 'react'
import footerlogo from '../../public/assets/footerlogo.png'

const Footer = () => {
  return (
    <div >
        <footer className='container grid grid-cols-3 mt-[71px]'>
            <div>
                <img src={footerlogo} alt="footerlogo" />
                <p className='p ! text-sm '>Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat.</p>
                <div>
                <FaLinkedin className='text-2xl text-[#5A5A5A]' />,
                <FaFacebookSquare className='text-2xl text-[#5A5A5A]' />,

                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div></div> 

            </div>
            <div></div>


        </footer>
    </div>
  )
}

export default Footer