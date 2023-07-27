import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className=' grid tablet:grid-cols-4 small:grid-cols-2 mobile:grid-cols-1 text-[#666] mt-44 tablet:ml-32 mobile:ml-5'>
                <div className="box1">
                    <Image
                    width={100}
                    height={100}
                     src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75' 
                     alt={"logo"}
                     />
                    <br /> <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <br />
                    <div className="text-black flex justify-between w-44">
                        <div className='border bg-[#f1f1f1] rounded-lg p-3'><BsTwitter /></div>
                        <div className='border bg-[#f1f1f1] rounded-lg p-3'>  <FaFacebookF /></div>
                        <div className='border bg-[#f1f1f1] rounded-lg p-3'> <FaLinkedinIn /></div>
                    </div>
                </div>
                <div className="box2 tablet:ml-20 mobile:ml-2 mobile:my-10 tablet:my-0">
                    <h1 className='text-lg font-bold'>Company</h1>
                    <ul className='text-sm space-y-3 mt-5'>
                        <li>About</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>How it Works</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="box3 tablet:ml-10 mobile:ml-2">
                    <h1 className='text-lg font-bold'>Support</h1>
                    <ul className='text-sm space-y-3 mt-5'>
                        <li>Support Carrer</li>
                        <li>24h Service</li>
                        <li>Quick Chat</li>
                    </ul>
                </div>
              
                <div className="box4 mobile:ml-2 tablet:ml-0 mobile:my-10 tablet:my-0">
                    <h1 className='text-lg font-bold'>Contact</h1>
                    <ul className='text-sm space-y-3 mt-5'>
                        <li>Whatsapp</li>
                        <li>Support 24h</li>
                    </ul>
                </div>
            </div>
            <hr className='tablet:mt-28 mobile:mt-5 '/>
            <div className='grid gap-5 grid-cols-3 tablet:ml-32 mobile:text-xs tablet:text-sm tablet:mt-10 mobile:my-2'>
                <div>
                    <p>Copyright © 2022 Dine <br />Market</p>
                </div>
                <div>
                    <p>Design by. Weird<br /> Design Studio</p>
                </div>
                <div>
                    <p>Code by. shabrina12 on <br />github</p>
                </div>
            </div>
        </>
    )
}

export default Footer