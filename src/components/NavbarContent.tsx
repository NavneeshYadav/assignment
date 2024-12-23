"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type NavbarContentProps = {
    content: string;
    disablearrow: string;
};

const NavbarContent: React.FC<NavbarContentProps> = ({ content, disablearrow }) => {
    return (
        <li>
            <div className="flex flex-row items-center gap-1">
                <Link href="/" className="hover:text-gray-400">
                    {content}
                </Link>
                {(disablearrow === "0") ? "" : <IoIosArrowDown />}
            </div>
        </li>
    );
};

export default NavbarContent;
