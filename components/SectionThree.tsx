import React from 'react'
import GlassCard from './GlassCard'
import SectionImg from "@/public/Vulti Agent Phone.png"
import Image from 'next/image'

const SectionThree = () => {
    return (
        <div className='sm:py-30 py-20 rounded-md px-5 max-w-[1300px] mx-auto'>
            <div className='flex lg:flex-row flex-col items-center gap-10'>
                <div>
                    <h1 className='sm:text-4xl text-3xl font-semibold mb-5'>What is wrong with wallets?</h1>
                    <div className='space-y-3'>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='text-lg font-bold mb-2'>Single-signature wallets are dangerous</h2>
                            <p className='text-sm'>Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?</p>
                            <span className='font-medium'>One mistake and forever rekt.</span>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='text-lg font-bold mb-2'>Single-signature wallets are dangerous</h2>
                            <p className='text-sm'>Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?</p>
                            <span className='font-medium'>One mistake and forever rekt.</span>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='text-lg font-bold mb-2'>Single-signature wallets are dangerous</h2>
                            <p className='text-sm'>Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?</p>
                            <span className='font-medium'>One mistake and forever rekt.</span>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='text-lg font-bold mb-2'>Single-signature wallets are dangerous</h2>
                            <p className='text-sm'>Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?</p>
                            <span className='font-medium'>One mistake and forever rekt.</span>
                        </GlassCard>
                    </div>
                </div>
                <Image src={SectionImg} alt='What is wrong with wallets image' width={500} />
            </div>
        </div>
    )
}

export default SectionThree