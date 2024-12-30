"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface MenuItem {
    label: string;
    hasDropdown: boolean;
}
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    // List of menu items
    const menuItems: MenuItem[] = [
        { label: 'Platform', hasDropdown: true },
        { label: 'Solutions', hasDropdown: true },
        { label: 'Resources', hasDropdown: true },
        { label: 'Pricing', hasDropdown: true },
        { label: 'Enterprise', hasDropdown: false },
        { label: 'Company', hasDropdown: true },
    ];


    // Toggle function with type for index
    const toggleDropdown = (index: number): void => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };
    const handleRemoveDiv = () => {
        setIsVisible(false); // Set state to false to hide the div
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (openDropdownIndex !== null) {
                setOpenDropdownIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openDropdownIndex]);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // Tailwind's `sm` breakpoint is 640px
        };

        // Check on initial render and add event listener
        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="sticky top-0 z-50 pt-1 bg-white">
            {isVisible &&
                <div className="relative text-white mt-1 mx-2 rounded-sm py-2 text-center bg-purple-800">
                    URL to Generate Podcast <span className="underline ml-3">Try Now <FaArrowRight className="inline-block ml-1" /></span>
                    <button className="absolute right-4" onClick={handleRemoveDiv}><IoMdClose className="mt-1" /></button>
                </div>}

            <nav className="bg-white z-30 text-black flex items-center lg:items-center h-20 lg:min-h-20 ">
                <div className="leftside flex lg:flex-row lg:gap-10 ">
                    <div className="ml-6 lg:ml-8">
                        <Link href="/" className="text-xl font-bold">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg" alt="internet connection issue" />
                        </Link>
                    </div>
                    <div className="flex lg:flex-row">
                        <ul
                            className={`flex lg:flex-row gap-4 lg:gap-8 lg:items-center lg:static lg:bg-transparent w-full lg:w-auto ${isOpen ? "bg-white flex-col absolute top-32 left-0 p-4" : "hidden lg:flex"
                                }`}
                        >
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative">
                                    <button
                                        className="hover:text-gray-400 flex items-center"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <IoIosArrowDown
                                                className={`ml-1 transition-transform duration-300 ${openDropdownIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                    </button>

                                    {item.hasDropdown && openDropdownIndex === index && (
                                        <div className="flex flex-row gap-5 absolute mt-2 top-6 p-4 bg-white border rounded-2xl shadow-lg">
                                            <div>
                                                <h1 className="text-gray-400">PRODUCTS
                                                </h1>
                                                <p>Avatar Video</p>
                                                <p>Video Translation</p>
                                                <p>Personalised Video</p>
                                                <p>Interactive Avatar</p>
                                            </div>
                                            <div>
                                                <h1 className="text-gray-400">FEATURES
                                                </h1>
                                                <p>Stock Avatar</p>
                                                <p>API</p>
                                                <p>API Pricing</p>
                                            </div>
                                            <div className="w-72 h-72 ">
                                                <img className="inline-block h-52 rounded-t-xl" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/673bc59a6019d8801c2ad722_LatestDropsNavThumb.webp" alt="image1" />

                                                <div className="bg-slate-200 py-3 pl-2 rounded-b-xl">
                                                    <p>Check out our latest drops</p>
                                                    <p className="text-purple-800">Learn more <FaArrowRight className="inline" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                            <button className="text-left px-3 py-2 rounded-3xl lg:hidden">Contact Sales</button>
                            <div className="flex flex-col">
                                <Link href="#" className="bg-black text-white mt-2 w-36 text-center rounded-3xl px-3 py-2 lg:hidden">
                                    Sign Up for free
                                </Link>
                                <Link href="/login" className="rounded-2xl p-2 mt-2 w-20 text-center border-black lg:hidden bg-slate-300">
                                    Login
                                </Link>

                            </div>

                        </ul>
                    </div>
                    <div className="rightside flex flex-col lg:flex-row lg:gap-10 justify-center items-center absolute right-5">
                        {/* Conditionally Render Login Link */}
                        {!isSmallScreen && (
                            <Link
                                href="/login"
                                className="hover:text-gray-400"
                            >
                                Login
                            </Link>
                        )}

                        {/* Conditionally Render Contact Sales and Sign-up Buttons */}
                        <div>
                            {!isSmallScreen && (
                                <button className="border-[1px] mx-1 border-black px-3 py-2 rounded-3xl">
                                    Contact Sales
                                </button>
                            )}
                            <button className="text-white mr-10 lg:mr-4  bg-black border px-3 py-2 rounded-3xl hover:bg-purple-800">
                                Sign up for free
                            </button>
                        </div>
                        {/* Hamburger Menu for Mobile */}
                        <button
                            className="absolute right-0 top-2 lg:hidden text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;
