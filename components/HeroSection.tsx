import React from "react";
import GlassCard from "./GlassCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import MobileMockUp from "@/public/App Mobile Screen Mockup 2.png"
import Image from "next/image";
import BitcoinLogo from "@/public/Bitcoin.jpg"
import EthLogo from "@/public/ethereum.png"
import ThorLogo from "@/public/thorchain.svg"
import VultisigLogo from "@/public/vultisig.svg"

const HeroSection = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-5 py-10 relative">
            <div className="absolute lg:top-15 left-0 max-lg:shadow-[0_0_210px_40px_rgba(33,230,191,0.5)] glow">
                <Image src={BitcoinLogo} alt="Bitcoin Logo" width={60} className="hidden lg:block" />
            </div>
            <div className="absolute top-80 lg:top-65 lg:left-10 left-20 max-lg:shadow-[0_0_210px_40px_rgba(33,230,191,0.5)] glow">
                <Image src={EthLogo} alt="Eth Logo" width={60} className="hidden lg:block" />
            </div>
            <div className="absolute lg:top-15 right-0 max-lg:shadow-[0_0_210px_40px_rgba(33,230,191,0.5)] glow">
                <Image src={VultisigLogo} alt="Vultisig Logo" width={60} className="hidden lg:block" />
            </div>
            <div className="absolute top-90 lg:top-70 right-10 max-lg:shadow-[0_0_210px_40px_rgba(33,230,191,0.5)] glow">
                <Image src={ThorLogo} alt="Thorchain Logo" width={60} className="hidden lg:block" />
            </div>
            <div className="flex flex-col items-center">
                <GlassCard className="py-2 px-5 rounded-full border border-[#A1A1A1]/20 text-xs flex items-center gap-2">
                    <p>VULTISIG AIRDROP IS LIVE!</p>
                    <FaLongArrowAltRight />
                </GlassCard>
                <h1 className="md:text-6xl text-4xl  text-center max-w-[1000px] leading-[1.2] my-4">Regain control with the Seedless, Multi-chain  crypto vault</h1>
                <p className="max-w-[800px] md:text-base text-sm text-center text-[#A1A1A1] mb-10">Experience top-tier security with Vultisig, the ultimate self-custodial, multi-chain crypto vault. It's based on secure threshold signatures. It's the first seedless, institutional-grade, multi-chain vault for everyone on the market.</p>
                <button className="bg-[#33E6BF]/20 border border-[#24a388] px-10 py-2 rounded-md mb-20 sm:mb-30 shadow-[0_0_30px_10px_rgba(33,230,191,0.2)]">Download Now</button>

                <Image src={MobileMockUp} alt="Mobile Mock Up" width={700} />
            </div>
        </section>
    );
};

export default HeroSection;
