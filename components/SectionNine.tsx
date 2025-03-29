import React from 'react'
import GlassCard from './GlassCard'
import Image from 'next/image'
import PhoneImgRight from "@/public/iPhone Space Black Right (1).png"
import PhoneImgLeft from "@/public/iPhone Space Black Left (7).png"

const SectionNine = () => {
    return (
        <section className='px-5 py-20 sm:py-30 border-b-2 border-b-[#142743]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='lg:p-10 rounded-md flex lg:flex-row flex-col items-center gap-20'>
                    <div className="flex-1">
                        <p className='font-bold sm:text-4xl text-3xl mb-5 sm:mb-10'>Secure your digital assets now!</p>
                        <p className='text-lg text-[#b9b9b9]'>Vultisig Vaults are battle-tested and trusted by thousands of users, with numbers growing daily.</p>
                        <button className="bg-[#33E6BF]/20 border border-[#24a388] px-10 py-2 rounded-md mt-10 shadow-[0_0_30px_10px_rgba(33,230,191,0.2)]">Download Now</button>
                    </div>
                    <div className="flex-1 flex items-center justify-center drop-shadow-[0_0_200px_rgba(33,230,191,0.7)] ">
                        <Image src={PhoneImgRight} alt='Image' width={230} className='lg:-mt-20 hidden lg:block' />
                        <Image src={PhoneImgLeft} alt='Image' width={230} className='lg:-mb-20 hidden lg:block' />
                        <Image src={PhoneImgRight} alt='Image' width={180} className='lg:-mt-20 lg:hidden' />
                        <Image src={PhoneImgLeft} alt='Image' width={180} className='lg:-mb-20 lg:hidden' />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default SectionNine