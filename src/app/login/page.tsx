"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex lg:flex-row justify-center items-center h-screen">
            <div className="flex flex-col px-20 pt-10 justify-center items-center bg-slate-200 bg-[url('https://app.heygen.com/assets/green_texture-c3f9ff03.png')] bg-cover bg-center w-[800px] h-[750px] rounded-2xl">
                <h1 className="text-left text-4xl font-bold">Create, Translate, and  Personalize <br /><span className="text-violet-600">
                    Videos in Minutes
                </span></h1>
                <p className="text-zinc-500 mx-7 mt-4">Create stunning videos with ease. Create your own or choose from our library of AI avatars and voices - in over 175 languages.</p>
                <div className="rounded-2xl mt-6 bg-black w-[600px] h-[350px]">

                </div>
                <div className="flex flex-row mt-7 gap-8">
                    <img className="h-14 w-15" src="/images/download.png" alt="" />
                    <img className="h-14 w-15" src="/images/download (1).png" alt="" />
                    <img className="h-14 w-15" src="/images/download (2).png" alt="" />
                    <img className="h-14 w-15" src="/images/download (3).png" alt="" />
                    <img className="h-14 w-15" src="/images/download (5).png" alt="" />
                    <img className="h-14 w-15" src="/images/download (4).png" alt="" />

                </div>
            </div>


            <div className="flex flex-col px-14 pt-10 justify-start">
                <Link href="/">
                    <img className="w-20 h-10" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg" alt="internet connection issue" />
                </Link>
                <h1 className="font-bold text-xl">
                    Welcome to HeyGen
                </h1>
                <div className="text-xs mt-2">We recommend using a <strong>work email</strong> to easily collaborate with your team.</div>
                <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
                    {/* Email Input */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Email Icon */}
                            <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12l-4-4m0 0l-4 4m4-4v12"
                                />
                            </svg>
                        </span>
                        <input
                            type="email"
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Name@work-email.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Password Icon */}
                            <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v-3m0 0V9a3 3 0 10-6 0v3m9 3h.01M4 15a3 3 0 003 3h10a3 3 0 003-3v-3a3 3 0 00-3-3H7a3 3 0 00-3 3v3z"
                                />
                            </svg>
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {/* Eye Icon */}
                            {showPassword ? (
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.676 1.663-1.19 2.379M15.354 15.354A9.007 9.007 0 0112 19a9.007 9.007 0 01-3.354-.646M9.646 9.646A9.007 9.007 0 005 12c0 4.477 2.943 8.268 7 9.542"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3l18 18M9.86 9.86a4.992 4.992 0 014.988-4.99m4.992 4.99c.003.273.003.546 0 .82M3.056 3.056a9.978 9.978 0 011.78 11.018m1.47 1.47c1.267 1.267 2.707 2.233 4.282 2.897M21 21l-6.646-6.646"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>
                    <p className="text-gray-400 text-right text-sm">Forget Password?</p>
                    <button className="w-full rounded-lg p-2 text-white bg-purple-500 hover:bg-purple-600">Sign In</button>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-purple-500 hover:text-purple-600 underline">
                        Sign Up with Email
                    </Link>
                </p>
                <div className="relative mt-4 mx-28">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full mx-2 border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>
                <div className="">

                    <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FcGoogle className="inline mr-1" /> Google</button>
                    <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FaApple className="inline mr-1" />Apple</button>
                    <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FaFacebook className="inline mr-1" /> Facebook</button>
                    <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><BsFillSuitcaseLgFill className="inline mr-1" /> SSO</button>
                </div>
               
                 




            </div>



        </div>

    )
}

