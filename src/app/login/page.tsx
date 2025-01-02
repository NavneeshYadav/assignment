"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
export default function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen">
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
                <div className="flex flex-col gap-2 w-full max-w-md mx-auto mt-10">

                    {/* Email Input */}
                    <div className="relative mb-3">
                        <AiOutlineMail className="absolute left-3 top-3 text-gray-500" size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-1">
                        <AiOutlineLock className="absolute left-3 top-3 text-gray-500" size={20} />
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {passwordVisible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mb-1">
                        <a href="/forgot-password" className="text-sm text-gray-300  hover:text-blue-500 ">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-[#7559fd] text-white py-2 rounded-md hover:bg-blue-800 transition">
                        Sign In
                    </button>

                    {/* Sign Up Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-[#7559fd] hover:blue-800 underline">
                                Sign up with email
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center justify-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="">
                        <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FcGoogle className="inline mr-1" /> Google</button>
                        <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FaApple className="inline mr-1" />Apple</button>
                        <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><FaFacebook className="inline mr-1" /> Facebook</button>
                        <button className="w-full rounded-lg p-2 border-2 mt-2 text-black  hover:bg-slate-100"><BsFillSuitcaseLgFill className="inline mr-1" /> SSO</button>
                    </div>
                </div>
            </div>








        </div>





    )
}

