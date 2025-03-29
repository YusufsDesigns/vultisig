import Image from 'next/image'
import React from 'react'
import IconOne from "@/public/icon-full-defi.svg"
import IconTwo from "@/public/icon-remote-signing.svg"
import IconThree from "@/public/icon-transaction-policies.svg"

const SectionSeven = () => {
    return (
        <div className='header py-20 px-5'>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <h1 className='sm:text-4xl text-3xl font-semibold mb-5'>Other Features</h1>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='p-5 rounded-md flex flex-col items-center text-center'>
                        <Image src={IconOne} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-xl mb-4 mt-5'>Full DeFi</p>
                        <p className=''>Swaps, Pools, Bridging. All DeFi functions right from your Vault.</p>
                    </div>
                    <div className='p-5 rounded-md flex flex-col items-center text-center'>
                        <Image src={IconTwo} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-xl mb-4 mt-5'>Remote Signing</p>
                        <p className=''>Sign with a remote co-signer. All messages are encrypted between devices.</p>
                    </div>
                    <div className='p-5 rounded-md flex flex-col items-center text-center'>
                        <Image src={IconThree} alt='Image' width={50} className='drop-shadow-[0_0_20px_rgba(33,230,191,0.9)]' />
                        <p className='font-bold text-xl mb-4 mt-5'>Transaction Policies</p>
                        <p className=''>Define transaction policies for your vault - spending limits, address whitelists and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSeven