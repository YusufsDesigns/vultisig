import React from "react";
import Logo from "@/public/Logo_white.svg";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-5">
            <nav className="flex items-center justify-between py-5">
                <Image src={Logo} alt="Vultisig Logo" width={150} />
                <div className="items-center hidden gap-10 lg:flex">
                    <ul className="flex items-center gap-10 text-[#A1A1A1]">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer outline-transparent">
                                Product
                                <IoIosArrowDown />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#061B3A] text-white space-y-2">
                                <DropdownMenuItem>Vultisig Mobile App</DropdownMenuItem>
                                <DropdownMenuItem>Vultisig macOS</DropdownMenuItem>
                                <DropdownMenuItem>Vultisig Windows</DropdownMenuItem>
                                <DropdownMenuItem>Vultisig Linux</DropdownMenuItem>
                                <DropdownMenuItem>VultiConnect (Chrome extension)</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <li>How it works</li>
                        <li>Backed By</li>
                        <li>Docs</li>
                        <li>$VULT</li>
                    </ul>
                    <p className="text-[#33E6BF]">Download App</p>
                </div>
                <Sheet>
                <SheetTrigger className="lg:hidden">
                    <IoMdMenu className="text-3xl" />
                </SheetTrigger>
                <SheetContent className="bg-[#061B3A] border-none">
                    <h1 className="font-medium p-4 border-b border-b-[#142743]">Menu</h1>
                    <div className="flex flex-col gap-4 px-4">
                        <ul className="flex flex-col gap-2">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Product</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="flex flex-col gap-3 ml-3">
                                            <li>Vultisig Mobile App</li>
                                            <li>Vultisig macOS</li>
                                            <li>Vultisig Windows</li>
                                            <li>Vultisig Linux</li>
                                            <li>VultiConnect (Chrome extension)</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <li className="mb-2">How it works</li>
                            <li className="mb-2">Backed By</li>
                            <li className="mb-2">Docs</li>
                            <li>$VULT</li>
                        </ul>
                        <p className="text-[#33E6BF]">Download App</p>
                    </div>
                </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Navbar;
