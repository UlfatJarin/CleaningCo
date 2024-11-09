import React from 'react'
import footerlogo from '../../public/assets/footerlogo.png'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import Custombtn from '../layers/Custombtn'

const Footer = () => {
    return (
        <div >
            <footer className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[71px] mb-[106px] gap-8'>
                <div className='max-w-[336px]'>
                    <img src={footerlogo} alt="footerlogo" />
                    <p className='p1  my-6 '>Lorem ipsum dolor sit amet, consectetur adipis cin gelit. Ut id consectetur in integer ullamc or per ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a.Nun c facilisis vitae erat in nam eu at consectetur nec erat.</p>
                    <div className='flex gap-3'>
                        <FaLinkedin className='text-2xl text-[#5A5A5A]' />
                        <FaFacebookSquare className='text-2xl text-[#5A5A5A]' />
                        <FaInstagramSquare className='text-2xl text-[#5A5A5A]' />
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='h3 mb-2'>Services </h3>
                        <p className='p1 '>Residential Clean</p>
                        <p className='p1 '>Commercial Clean</p>
                        <p className='p1 '>Window Cleaning</p>
                        <p className='p1 '>Outdoor Furniture</p>
                        <p className='p1 '>Laundray Services</p>
                        <p className='p1 '>Car Wash</p>
                        <p className='p1 '>Sofa Wash</p>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h3 className='h3 mb-2'>Useful Link </h3>
                        <p className='p1 '>Projects </p>
                        <p className='p1 '>Blog </p>
                        <p className='p1 '>About Us </p>
                        <p className='p1 '>Contact Us </p>
                    </div>

                </div>
                <div >
                    <h3 className='h3'>Subscribe to newsletter</h3>
                    <input className='w-[312px] p-4 border border-main rounded-[5px] between bg-whitec my-6 '  id='email' type='email' placeholder='Your Email address'/>
                    <Custombtn className='!bg-main !text-whitec' btntext='Subscribe'/>
                    
                </div>
            </footer>
            <div className='h-[1px] w-full bg-lightmain2 '></div>
            <div className='container between my-4'>
                <div className='flex gap-6'>
                    <p className='p1'>2022 @cleaning.Co</p>
                    <p className='p1'>All rights reserved</p>
                </div>
                <div className='flex gap-6'>
                     <p className='p1'>Terms and Consitions</p>
                     <p className='p1'>Privacy Policy</p>
                </div>

            </div>
        </div>
    )
}

export default Footer