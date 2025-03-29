import Image from "next/image"
import GlassCard from "./GlassCard"
import SectionImg from "@/public/security.png"


const SectionFive = () => {
    return (
        <div className='sm:py-30 py-20 rounded-md px-5 max-w-[1300px] mx-auto'>
            <div className='flex lg:flex-row flex-col-reverse items-center gap-20'>
                <Image src={SectionImg} alt='What is wrong with wallets image' className="filter drop-shadow-[0_0_80px_rgba(33,230,191,0.3)]" width={400} />
                <div>
                    <h1 className='sm:text-4xl text-3xl font-semibold mb-5'>Experience Security Without Sacrifice</h1>
                    <div className='space-y-3'>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='text-xl font-bold mb-2'>Vault Generation</h2>
                                <p className='font-medium'>KeyGen time: 3-5 seconds.</p>
                                <span className='text-sm'>Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.</span>
                            </div>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='text-xl font-bold mb-2'>Transaction Signing</h2>
                                <p className='font-medium'>KeySign time: 1-3 seconds.</p>
                                <span className='text-sm'>One device starts the transaction. A second paired device confirms the transaction. It is natively “two-factor” and is done in real time.</span>
                            </div>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='text-xl font-bold mb-2'>Resharing</h2>
                                <p className='font-medium'>Reshare Time: 3-5 seconds.</p>
                                <span className='text-sm'>Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.</span>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive