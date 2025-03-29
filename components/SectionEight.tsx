import Image from 'next/image'
import React from 'react'
import IconOne from "@/public/icon-crypto-natives.svg"
import IconTwo from "@/public/icon-whales.svg"
import IconThree from "@/public/icon-funds.svg"
import IconFour from "@/public/icon-treasuries.svg"
import GlassCard from './GlassCard'

const SectionEight = () => {
    return (
        <div className='sm:py-30 py-20 px-5'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <h1 className='sm:text-4xl text-3xl font-semibold mb-10'>Vultisig is for everyone</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <GlassCard className='p-5 rounded-md'>
                        <Image src={IconOne} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-lg mb-2 mt-5'>Crypto Natives</p>
                        <p className='text-sm'>
                            Swap, borrow, save, or spend in one wallet with institutional-grade security. You never need a second wallet again.
                        </p>
                    </GlassCard>

                    <GlassCard className='p-5 rounded-md'>
                        <Image src={IconTwo} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-lg mb-2 mt-5'>Whales</p>
                        <p className='text-sm'>
                            Holding large crypto funds? Secure them with a Vultisig vault and avoid risks. Upgrade now and experience top-tier wallet security.
                        </p>
                    </GlassCard>

                    <GlassCard className='p-5 rounded-md'>
                        <Image src={IconThree} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-lg mb-2 mt-5'>Funds</p>
                        <p className='text-sm'>
                            Vultisig is the trusted, open-source alternative to custodians. With remote co-signing, access your assets securely from anywhere.
                        </p>
                    </GlassCard>

                    <GlassCard className='p-5 rounded-md'>
                        <Image src={IconFour} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-lg mb-2 mt-5'>Treasuries</p>
                        <p className='text-sm'>
                            Manage crypto treasuries with Vultisig's policies. Set whitelists, spending limits, and team approvals for enhanced financial security.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </div>
        )
}

export default SectionEight