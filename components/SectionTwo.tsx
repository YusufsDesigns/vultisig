import React from 'react'
import LogoOne from "@/public/thorchain.svg"
import LogoTwo from "@/public/vultisig.svg"
import LogoThree from "@/public/wewe.svg"
import LogoFour from "@/public/DeFi-suisse-treasury.svg"
import LogoFive from "@/public/zkfinance.svg"
import LogoSix from "@/public/ruji.svg"
import Image from 'next/image'
import GlassCard from './GlassCard'

const SectionTwo = () => {
    return (
        <section className='flex items-center flex-col py-20 rounded-md px-5 max-w-[1200px] mx-auto'>
            <h1 className='mb-5 text-2xl font-semibold'>Trusted by the best</h1>
            <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-10 font-medium text-xl'>
                <div className='flex items-center gap-2'>
                    <Image src={LogoOne} width={40} alt='Thorchain Logo' />
                    <span>THORChain</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={LogoTwo} width={40} alt='Vultisig Logo' />
                    <span>Vultisig</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={LogoThree} width={40} alt='WEWE Logo' />
                    <span>WEWE</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={LogoFour} width={40} alt='DeFi Suisse Logo' />
                    <span>DeFi Suisse</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={LogoFive} width={40} alt='ZKFinance Logo' />
                    <span>ZKFinance</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={LogoSix} width={40} alt='RUJI Logo' />
                    <span>RUJI</span>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo