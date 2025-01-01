"use client";

import { motion } from "framer-motion";

const Section5 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-10 pt-20 bg-[url('https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66dc391e06db0a58c13ee13e_texture%203.avif')] bg-cover bg-center"
        >
            <div className="relative">
                {/* Avatar Image with Animation */}
                <motion.img
                    className="mx-auto w-80 lg:w-6/12 lg:mb-40 rounded-2xl"
                    src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/67521ed7073c3ab9fd2da9b0_Hompage%20Avatar.webp"
                    alt="image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Text Content and Video Section with Animation */}
            <motion.div
                className="bg-violet-950 mt-10 mx-6 rounded-3xl px-7 lg:px-20 py-20 flex flex-col lg:flex-row justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {/* Text Block with Animation */}
                <motion.div
                    className="text-white lg:pr-52 mb-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h2 className="text-4xl lg:text-5xl">Every video you have in every language you need.</h2>
                    <p className="text-xl mt-4">
                        Update existing videos to 175 languages and dialects in minutes. We can even translate for you or add subtitles, making sure lips and voice match perfectly for the world's easiest, most effective localization.
                    </p>
                    <button className="rounded-3xl mt-4 bg-white hover:bg-purple-300 text-black px-3 py-2">
                        Learn more
                    </button>
                </motion.div>

                {/* Video Block with Animation */}
                <motion.video
                    className="rounded-3xl w-full h-full"
                    loop
                    autoPlay
                    muted
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <source
                        src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be%2F66e577329101468db7a867e9_HeyGen-13-Localize-580x580-081524-transcode.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </motion.video>
            </motion.div>
        </motion.div>
    );
};

export default Section5;