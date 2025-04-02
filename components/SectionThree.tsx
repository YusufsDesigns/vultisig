import React from 'react'
import GlassCard from './GlassCard'
import SectionImg from "@/public/Vulti Agent Phone.png"
import Image from 'next/image'

const SectionThree = () => {
    return (
        <div className='sm:py-30 py-20 rounded-md px-5 max-w-[1300px] mx-auto'>
            <div className='flex flex-col items-center gap-10 lg:flex-row'>
                <div>
                    <h1 className='mb-5 text-3xl font-semibold sm:text-4xl'>What is wrong<span className='text-gradient'> with wallets?</span></h1>
                    <div className='space-y-3'>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='mb-2 text-lg font-bold text-gradient'>Single-signature wallets are dangerous</h2>
                            <p className='text-sm'>Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?</p>
                            <p className='mt-5 font-semibold uppercase'>One mistake and forever rekt.</p>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='mb-2 text-lg font-bold text-gradient'>Hardware wallets are clunky</h2>
                            <p className='text-sm'>Small screens, small buttons, annoying interfaces. Complicated setup instructions, scary firmware updates and confusing transactions.</p>
                            <p className='mt-5 font-semibold uppercase'>Why can't it be better?</p>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <h2 className='mb-2 text-lg font-bold text-gradient'>Multi-signature wallets are painful</h2>
                            <p className='text-sm'>Multi-sig is a solution, but it is not chain agnostic or dynamic. Different networks (ETH, BTC, SOL) have different multi-sig setups, making a single UX impossible.</p>
                            <p className='mt-5 font-semibold uppercase'>If only there was something that works for all.</p>
                        </GlassCard>
                    </div>
                </div>
                <Image src={SectionImg} className="filter drop-shadow-[0_0_80px_rgba(33,230,191,0.3)]" alt='What is wrong with wallets image' width={500} />
            </div>
        </div>
    )
}

export default SectionThree