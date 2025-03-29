import { ReactNode } from "react";

const GlassCard = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div
        className={`backdrop-blur-md bg-[#A1A1A1]/10 border border-[#A1A1A1]/20 shadow-2xl ${className}`}
        >
        {children}
        </div>
    );
};

export default  GlassCard
