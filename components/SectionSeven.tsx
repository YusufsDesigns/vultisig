import Image from 'next/image'
import React from 'react'
import IconOne from "@/public/icon-full-defi.svg"
import IconTwo from "@/public/icon-remote-signing.svg"
import IconThree from "@/public/icon-transaction-policies.svg"

const SectionSeven = () => {
    return (
        <div className='px-5 py-20 header'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <h1 className='mb-5 text-3xl font-semibold sm:text-4xl'>Other <span className='text-gradient'> Features</span></h1>
                <div className='grid gap-5 md:grid-cols-3'>
                    <div className='flex flex-col items-center p-5 text-center rounded-md'>
                        <Image src={IconOne} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='mt-5 mb-4 text-xl font-bold'>Full DeFi</p>
                        <p className=''>Swaps, Pools, Bridging. All DeFi functions right from your Vault.</p>
                    </div>
                    <div className='flex flex-col items-center p-5 text-center rounded-md'>
                        <Image src={IconTwo} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='mt-5 mb-4 text-xl font-bold'>Remote Signing</p>
                        <p className=''>Sign with a remote co-signer. All messages are encrypted between devices.</p>
                    </div>
                    <div className='flex flex-col items-center p-5 text-center rounded-md'>
                        <Image src={IconThree} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='mt-5 mb-4 text-xl font-bold'>Transaction Policies</p>
                        <p className=''>Define transaction policies for your vault - spending limits, address whitelists and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSeven