"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FaArrowRight } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Section3 = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
    const [isMuted, setIsMuted] = useState(true); // State to track mute status

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Toggle the muted property
            setIsMuted(!isMuted); // Update state
        }
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        // Check on initial render and add event listener
        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="mt-20 text-left mx-8 sm:text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl lg:text-5xl weight-400 mb-5">Video for content creators like you.</h2>
                <p className="text-lg">
                    Whatever you do, whoever you work with — here's how HeyGen can help.
                </p>
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-16 gap-10">
                {!isSmallScreen && (
                    <motion.div
                        className="relative"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <video
                            className="rounded-2xl w-96 lg:w-[450px] lg:mx-auto"
                            ref={videoRef}
                            loop
                            autoPlay
                            muted
                        >
                            <source src="https://resource.heygencdn.com/homepage/AImail_final_opt.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={toggleMute}
                            className="px-4 py-2 absolute top-10 left-14 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                        >
                            {isMuted ? <IoVolumeMute className="text-black" /> : <GoUnmute className="text-black" />}
                        </button>
                    </motion.div>
                )}

                <motion.div
                    className="mx-7 lg:h-[250px]"
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Accordion className="w-72 lg:w-96" type="single" collapsible>
                        {["Marketing", "Sales", "Learning & Development", "Localization"].map((title, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}>
                                <AccordionTrigger>{title}</AccordionTrigger>
                                <AccordionContent className="relative">
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        {title === "Marketing" &&
                                            "Make product explainers and how-to's for anyone, anywhere, instantly."}
                                        {title === "Sales" &&
                                            "Train new reps, provide the latest competitive intelligence, and teach reps to sell new products with localized, engaging videos."}
                                        {title === "Learning & Development" &&
                                            "Nobody wants to read training docs and e-learning content, and now they don’t have to."}
                                        {title === "Localization" &&
                                            "Translate ads, courses, video podcasts and more to reach your global audience."}
                                    </motion.h1>

                                    {isSmallScreen && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <video
                                                className="rounded-2xl w-96 mt-2 mb-6 lg:w-[450px] lg:mx-auto"
                                                ref={videoRef}
                                                loop
                                                autoPlay
                                                muted
                                            >
                                                <source
                                                    src="https://resource.heygencdn.com/homepage/AImail_final_opt.mp4"
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                            <button
                                                onClick={toggleMute}
                                                className="px-4 py-2 absolute top-8 left-8 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                                            >
                                                {isMuted ? <IoVolumeMute className="text-black" /> : <GoUnmute className="text-black" />}
                                            </button>
                                        </motion.div>
                                    )}
                                    <p className="text-purple-600 absolute bottom-1 right-1">
                                        <FaArrowRight className="inline" /> Learn more
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section3;