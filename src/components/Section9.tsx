"use client";

import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const Section9 = () => {
    // State to track hover status for each image
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="mt-28">
                <h1 className="mb-28 text-center font-medium text-5xl">Made With HeyGen</h1>
                <div className="flex flex-col mx-4 lg:flex-row justify-center items-center gap-10 mt-4">
                    {/* First Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative overflow-hidden rounded-t-xl">
                            <img
                                className={`w-96 h-48 rounded-t-xl transform transition duration-300 hover:scale-110 ${hoveredIndex === 0 ? 'scale-110' : ''}`}
                                src="https://cdn.prod.website-files.com/66fe8021b25e3d52866115cd/6712df1a1e54c63506e9466e_Olgivy%20Feature%20Image-p-2000.png"
                                alt="image1"
                            />
                        </div>
                        <div className="bg-gray-200 lg:w-96 lg:h-56 h-72 rounded-b-xl">
                            <div className="pt-7 ml-3 lg:ml-0 text-center flex flex-wrap lg:flex-nowrap justify-start lg:justify-center">
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Agency</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Personalized Video</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 mt-2 lg:mt-0 rounded-3xl">Marketing</span>
                            </div>
                            <p className="mt-6 mx-4 text-lg text-left mb-6">How Ogilvy used HeyGen to get Gen Z to talk about their emotions</p>
                            <button
                                className={`bg-black ml-4 text-white p-2 rounded-full hover:bg-purple-800 ${hoveredIndex === 0 ? 'bg-purple-800' : ''}`}
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        onMouseEnter={() => setHoveredIndex(1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative overflow-hidden rounded-t-xl">
                            <img
                                className={`w-96 h-48 rounded-t-xl transform transition duration-300 hover:scale-110 ${hoveredIndex === 1 ? 'scale-110' : ''}`}
                                src="https://cdn.prod.website-files.com/66fe8021b25e3d52866115cd/671858e4480e7a4ef5539f68_Publicis%20Groupe%20Featured%20Image-p-500.png"
                                alt="image2"
                            />
                        </div>
                        <div className="bg-gray-200 lg:w-96 lg:h-56 h-72 rounded-b-xl">
                            <div className="pt-7 ml-3 lg:ml-0 text-center flex flex-wrap lg:flex-nowrap justify-start lg:justify-center">
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Agency</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Personalized Video</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 mt-2 lg:mt-0 rounded-3xl">Marketing</span>
                            </div>
                            <p className="mt-6 mx-4 text-lg text-left mb-6">How Ogilvy used HeyGen to get Gen Z to talk about their emotions</p>
                            <button
                                className={`bg-black ml-4 text-white p-2 rounded-full hover:bg-purple-800 ${hoveredIndex === 1 ? 'bg-purple-800' : ''}`}
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        onMouseEnter={() => setHoveredIndex(2)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative overflow-hidden rounded-t-xl">
                            <img
                                className={`w-96 h-48 rounded-t-xl transform transition duration-300 hover:scale-110 ${hoveredIndex === 2 ? 'scale-110' : ''}`}
                                src="https://cdn.prod.website-files.com/66fe8021b25e3d52866115cd/6712e094dee11753c28aee1b_World%20Economic%20Forum%20Featured%20Image-p-500.png"
                                alt="image3"
                            />
                        </div>
                        <div className="bg-gray-200 lg:w-96 lg:h-56 h-72 rounded-b-xl">
                            <div className="pt-7 ml-3 lg:ml-0 text-center flex flex-wrap lg:flex-nowrap justify-start lg:justify-center">
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Agency</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 rounded-3xl">Personalized Video</span>
                                <span className="text-black bg-white mx-1 py-2 px-3 mt-2 lg:mt-0 rounded-3xl">Marketing</span>
                            </div>
                            <p className="mt-6 mx-4 text-lg text-left mb-6">How Ogilvy used HeyGen to get Gen Z to talk about their emotions</p>
                            <button
                                className={`bg-black ml-4 text-white p-2 rounded-full hover:bg-purple-800 ${hoveredIndex === 2 ? 'bg-purple-800' : ''}`}
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-56 text-center mt-10 mx-auto"
                >
                    <button className="text-white bg-black border px-4 py-2 rounded-3xl hover:bg-purple-600">
                        View all customer stories
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section9;