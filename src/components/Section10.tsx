"use client";

import { motion } from "framer-motion";

const Section10 = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="mt-44 text-center mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl lg:text-6xl font-normal"
                >
                    Ready to create?
                </motion.h1>
            </div>
            <div className="w-40 mt-8 text-center mx-auto">
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600"
                >
                    <a href="/signup">Get started for free</a>
                </motion.button>
            </div>
        </motion.section>
    );
};

export default Section10;