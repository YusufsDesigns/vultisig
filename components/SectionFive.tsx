import Image from "next/image"
import GlassCard from "./GlassCard"
import SectionImg from "@/public/security.png"


const SectionFive = () => {
    return (
        <div className='sm:py-30 py-20 rounded-md px-5 max-w-[1300px] mx-auto'>
            <div className='flex flex-col-reverse items-center gap-20 lg:flex-row'>
                <Image src={SectionImg} alt='What is wrong with wallets image' className="filter drop-shadow-[0_0_80px_rgba(33,230,191,0.3)]" width={400} />
                <div>
                    <h1 className='mb-5 text-3xl font-semibold sm:text-4xl'>Experience Security <span className="text-gradient"> Without Sacrifice</span></h1>
                    <div className='space-y-3'>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='mb-2 text-xl font-bold text-gradient'>Vault Generation</h2>
                                <p className='mb-5 font-semibold'>KeyGen time: 3-5 seconds.</p>
                                <span className='text-sm'>Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.</span>
                            </div>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='mb-2 text-xl font-bold text-gradient'>Transaction Signing</h2>
                                <p className='mb-5 font-semibold'>KeySign time: 1-3 seconds.</p>
                                <span className='text-sm'>One device starts the transaction. A second paired device confirms the transaction. It is natively “two-factor” and is done in real time.</span>
                            </div>
                        </GlassCard>
                        <GlassCard className='p-4 rounded-sm'>
                            <div>
                                <h2 className='mb-2 text-xl font-bold text-gradient'>Resharing</h2>
                                <p className='mb-5 font-semibold'>Reshare Time: 3-5 seconds.</p>
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