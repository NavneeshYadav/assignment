"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white text-black flex lg:items-center lg:min-h-20 sticky top-0">
            <div className="leftside flex lg:flex-row lg:gap-10 ">
                <div className="lg:ml-8">
                    <Link href="/" className="text-xl font-bold">
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg" alt="internet connection issue" />
                    </Link>
                </div>
                <div className="flex lg:flex-row ">
                    <ul
                        className={`flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto ${isOpen ? "top-14 left-0 p-4" : "hidden lg:flex"
                            }`}
                    >
                        <NavbarContent content="Platforms" disablearrow="1" />
                        <NavbarContent content="Solutions" disablearrow="1" />
                        <NavbarContent content="Resources" disablearrow="1" />
                        <NavbarContent content="Pricing" disablearrow="1" />
                        <NavbarContent content="Enterprise" disablearrow="0" />
                        <NavbarContent content="Company" disablearrow="1" />

                    </ul>
                </div>
            </div>
            <div className="rightside flex lg:flex-row lg:gap-10 absolute right-5">
                <div className="flex lg:flex-row">
                    <ul
                        className={`flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto ${isOpen ? "top-14 left-0 p-4" : "hidden lg:flex"
                            }`}
                    >
                        <div>
                            <NavbarContent content="Login" disablearrow="0" />
                        </div>

                        <button className="border-2 border-black px-3 py-2 rounded-3xl">Contact Sales</button>
                        <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Sign up for free</button>



                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
