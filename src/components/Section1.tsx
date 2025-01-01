"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";

const Section1: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
    const [isMuted, setIsMuted] = useState(true); // State to track mute status

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Toggle the muted property
            setIsMuted(!isMuted); // Update state
        }
    };

    return (
        <motion.section
            className="py-7 flex sm:flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="bg-[url('https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db31dbefabba2ccab38c8b_hero-2%202.avif')] bg-cover bg-center"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.h1
                    className="text-[34px] lg:text-6xl text-center font-light mx-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Create and translate videos <br /> with HeyGen's AI Video Generator
                </motion.h1>

                <motion.p
                    className="text-xl mt-3 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Produce studio-quality videos in 175 languages without a camera or crew.
                </motion.p>

                <motion.div
                    className="w-40 mt-4 text-center mx-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-purple-800">
                        Sign up for free
                    </button>
                </motion.div>

                <motion.p
                    className="text-sm mt-3 mb-5 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Unlimited video | No credit card needed
                </motion.p>

                <div className="relative">
                    <motion.video
                        className="rounded-2xl w-11/12 mx-auto"
                        ref={videoRef}
                        loop
                        autoPlay
                        muted
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <source
                            src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </motion.video>
                    <button
                        onClick={toggleMute}
                        className="px-4 py-2 absolute top-10 left-14 lg:top-14 lg:left-24 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                    >
                        {isMuted ? <IoVolumeMute className="text-black" /> : <GoUnmute className="text-black" />}
                    </button>
                    <motion.div
                        className="hidden absolute lg:bottom-12 lg:left-24 bg-white w-80 rounded-xl h-56 border-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <div className="flex flex-row mt-6 ml-6">
                            <img
                                className="rounded-full mx-1 w-8"
                                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db342e29294df7682b40e8_Avatar%201.avif"
                                alt="img1"
                            />
                            <img
                                className="mx-1 w-8"
                                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66eb0a35a235b95dd923f95a_headshot.webp"
                                alt="img2"
                            />
                            <img
                                className="mx-1 w-8"
                                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66d3fc1ed7d2e1a016725b5f_Mask_group-1-removebg-preview%20(1).avif"
                                alt="img3"
                            />
                        </div>
                        <div className="bg-[#d3e9ff] mx-6 mt-4 h-[1px]"></div>
                        <p className="mx-6 mt-4">
                            Hey there! Welcome to HeyGen, where you can create and translate videos without a camera or crew.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center flex flex-row gap-2 justify-center mt-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <p>Trusted by over 45,000 customers</p> |{" "}
                    <img
                        className="size-6"
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f199f848e447ac8da0de24_Frame.webp"
                        alt=""
                    />
                    <p>Rated 4.8/5 on G2</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Section1;