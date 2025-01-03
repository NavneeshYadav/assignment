"use client";

import { motion } from "framer-motion";

const Section2 = () => {
    return (
        <motion.section
            className="py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* Image Section */}
                <motion.div
                    className="mt-8 h-96 text-center mx-10"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        className="block lg:h-[400px]"
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/67521ebd070b3788dbc875c1_Homepage%20Avatar%20Block-p-800.webp"
                        alt="image"
                    />
                </motion.div>

                {/* Text Content Section */}
                <motion.div
                    className="text-left flex flex-col justify-center mx-10 mt-8 lg:w-96"
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-6xl sm:mx-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Meet your new spokesperson.
                    </motion.h2>
                    <motion.div
                        className="mt-4 sm:mx-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        It's you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. Change voice, clothes, or background with a click.
                    </motion.div>
                    <motion.div
                        className="mt-4 sm:mx-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <button className="text-white bg-black border px-3 py-2 rounded-3xl lg:block lg:min-w-full hover:bg-purple-800">
                           <a href="/signup">Sign up for free</a>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section2;