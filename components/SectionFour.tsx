import React from 'react'
import GlassCard from './GlassCard'
import ImgOne from "@/public/threshold-signatures.webp"
import ImgTwo from "@/public/familiar-hardware.webp"
import ImgThree from "@/public/rich-hardware.webp"
import ImgFour from "@/public/crypto-bank.webp"
import Image from 'next/image'

const SectionFour = () => {
    return (
        <div className='header py-20 sm:py-30 px-5'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <h1 className='sm:text-4xl text-3xl font-semibold mb-3'>The Solution</h1>
                <p className='mb-10 text-center'>VULTISIG is the next evolution in crypto vaults</p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgOne} alt='Image' width={150} className='glow' />
                        <p className='font-bold text-lg my-2'>Threshold  Signatures</p>
                        <p className='text-sm'>Multiple devices to sign—no single point of failure. Never lose funds with one compromised device</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgTwo} alt='Image' width={150} className='glow' />
                        <p className='font-bold text-lg my-2'>Familiar Hardware</p>
                        <p className='text-sm'>Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgThree} alt='Image' width={150} className='glow' />
                        <p className='font-bold text-lg my-2'>Vault Shares</p>
                        <p className='text-sm'>No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgFour} alt='Image' width={150} className='glow' />
                        <p className='font-bold text-lg my-2'>Rich UI</p>
                        <p className='text-sm'>Have all information displayed on big screens. Easy to see—easy to understand</p>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}

export default SectionFour