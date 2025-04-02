import React from 'react'
import GlassCard from './GlassCard'
import ImgOne from "@/public/threshold-signatures.webp"
import ImgTwo from "@/public/familiar-hardware.webp"
import ImgThree from "@/public/rich-hardware.webp"
import ImgFour from "@/public/crypto-bank.webp"
import Image from 'next/image'

const SectionFour = () => {
    return (
        <div className='px-5 py-20 header sm:py-30'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <h1 className='mb-3 text-3xl font-semibold sm:text-4xl'>The <span className='text-gradient'>Solution</span></h1>
                <p className='mb-10 text-center'>VULTISIG is the next evolution in crypto vaults</p>
                <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgOne} alt='Image' width={150} className='glow' />
                        <p className='my-2 text-lg font-bold'>Threshold  Signatures</p>
                        <p className='text-sm'>Multiple devices to sign—no single point of failure. Never lose funds with one compromised device</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgTwo} alt='Image' width={150} className='glow' />
                        <p className='my-2 text-lg font-bold'>Familiar Hardware</p>
                        <p className='text-sm'>Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgThree} alt='Image' width={150} className='glow' />
                        <p className='my-2 text-lg font-bold'>Vault Shares</p>
                        <p className='text-sm'>No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!</p>
                    </GlassCard>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={ImgFour} alt='Image' width={150} className='glow' />
                        <p className='my-2 text-lg font-bold'>Rich UI</p>
                        <p className='text-sm'>Have all information displayed on big screens. Easy to see—easy to understand</p>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}

export default SectionFour