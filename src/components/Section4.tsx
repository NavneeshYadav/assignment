"use client";

import { motion } from "framer-motion";

const Section4 = () => {
    return (
        <motion.div
            className="mx-7 lg:mx-96 text-left lg:text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.h1
                className="text-4xl lg:text-6xl mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                All you need is words.
            </motion.h1>
            <motion.p
                className="text-xl mt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                Write your script (or get some help with built-in ChatGPT), and watch an avatar read it flawlessly in one take. 
                Need to change something? No reshoots necessary, just edit the text.
            </motion.p>
            <motion.div
                className="w-40 mt-4 text-center lg:mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">
                    <a href="/signup">Get started for free</a>
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Section4;