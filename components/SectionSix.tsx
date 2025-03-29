import Image from "next/image"
import GlassCard from "./GlassCard"
import PhoneOne from "@/public/iPhone Space Black Left (7).png"
import PhoneTwo from "@/public/iPhone Space Black Right (4).png"
import PhoneThree from "@/public/wallets-power.webp"


const SectionSix = () => {
    return (
        <div className='max-w-[1100px] mx-auto flex flex-col px-2 sm:px-5 sm:py-30 py-20'>
                <h1 className='sm:text-4xl text-3xl font-semibold mb-10 text-center px-3'>Best features in one place</h1>
                <div className='flex flex-col gap-5'>
                    <GlassCard className='sm:px-10 px-5 py-5 sm:py-10 rounded flex lg:flex-row flex-col items-center gap-10'>
                        <div className="flex-1">
                            <p className='font-bold text-2xl sm:text-4xl mb-5 sm:mb-10'>VUltisig: Asset Management Hub</p>
                            <p className='text-lg text-[#b9b9b9]'>Vultisig is chain agnostic - Bitcoin, Ethereum, Solana, THORChain and many more. The first multi-chain, multi-asset, multi-signature wallet in the world for everyone. You can deposit, send, swap and more inside Vultisig.</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center drop-shadow-[0_0_180px_rgba(33,230,191,0.6)] ">
                            <Image src={PhoneOne} alt='Image' width={230} className='' />
                        </div>
                    </GlassCard>
                    <GlassCard className='sm:px-10 px-5 py-10 rounded flex lg:flex-row flex-col-reverse items-center gap-10'>
                        <div className="flex-1 flex items-center justify-center drop-shadow-[0_0_180px_rgba(33,230,191,0.6)] ">
                            <Image src={PhoneTwo} alt='Image' width={230} className='' />
                        </div>
                        <div className="flex-1">
                            <p className='font-bold text-2xl sm:text-4xl mb-10'>DeFi in your pocket</p>
                            <p className='text-lg text-[#b9b9b9]'>Vultisig is natively DeFi compatible - rebalance your portfolio right inside the vault. It also supports advanced DeFi functions such as bonding to Nodes, Staking and more!</p>
                        </div>
                    </GlassCard>
                    <GlassCard className='sm:px-10 px-5 py-10 rounded flex lg:flex-row flex-col items-center gap-10'>
                        <div className="flex-1">
                            <p className='font-bold text-2xl sm:text-4xl mb-10'>Expand Your Wallet`s Power</p>
                            <p className='text-lg text-[#b9b9b9]'>Unlock new possibilities with Vultisig Plugins. From automated investments (DCA) to salary management, customize your wallet with features tailored to your needs. Simplify your crypto experience with tools that work seamlessly together. (Still in development)</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center drop-shadow-[0_0_180px_rgba(33,230,191,0.6)] ">
                            <Image src={PhoneThree} alt='Image' width={280} className='' />
                        </div>
                    </GlassCard>
                </div>
            </div>
    )
}

export default SectionSix