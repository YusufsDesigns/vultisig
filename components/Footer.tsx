import React from 'react'
import Logo from "@/public/Logo_white.svg"
import Image from 'next/image'
import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-5 py-20'>
            <div className='flex lg:flex-row flex-col justify-between gap-20'>
                <div className='w-full text-[#A1A1A1]'>
                    <Image src={Logo} alt="Vultisig Logo" width={150} />
                    <p className='text-sm mt-3 mb-5'>© Copyright 2025 - Vultisig v1.1.0</p>
                    <p className='text-sm hidden md:block'>Experience top-tier security with Vultisig, the ultimate self-custodial, multi-chain crypto vault. Built on secure threshold signatures, it’s the first seedless, institutional-grade vault designed for everyone.</p>
                    <div className="text-white text-2xl mt-5 flex items-center gap-3">
                        <FaGithub />
                        <FaXTwitter />
                        <FaDiscord />
                        <FaTelegramPlane />
                    </div>
                </div>
                <div className='flex lg:justify-end w-full'>
                    <div className='flex flex-wrap gap-20'>
                        <ul className=" text-[#A1A1A1] space-y-4">
                            <li className='font-bold text-white text-lg'>Vultisig</li>
                            <li>How It Works</li>
                            <li>Backed by</li>
                            <li>Docs</li>
                            <li>$VULT</li>
                            <li>Extension</li>
                        </ul>
                        <ul className=" text-[#A1A1A1] space-y-4">
                            <li className='font-bold text-white text-lg'>Support</li>
                            <li>Support</li>
                            <li>FAQs</li>
                            <li>Audits</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className=" text-[#A1A1A1] space-y-4">
                            <li className='font-bold text-white text-lg'>Legal</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <p className='text-sm md:hidden'>Experience top-tier security with Vultisig, the ultimate self-custodial, multi-chain crypto vault. Built on secure threshold signatures, it’s the first seedless, institutional-grade vault designed for everyone.</p>
            </div>
        </div>
    )
}

export default Footer