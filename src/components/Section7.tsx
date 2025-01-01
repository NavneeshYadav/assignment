"use client";

import { motion } from "framer-motion";

const Section7 = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="mt-28 px-10 lg:px-20 flex bg-gray-300 flex-col lg:flex-row mx-4 mb-2 lg:mx-9 rounded-lg justify-center items-center">
                {/* Text Content with Animation */}
                <motion.div
                    className="text-black text-left mx-auto pt-10 lg:w-[700px] lg:pr-32"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-4xl lg:text-6xl mb-5">
                        Personalized messages without a person.
                    </h2>
                    <p className="text-xl mb-5">
                        Use your avatar to send personalized videos and branded landing pages to each contact in your CRM. Bump up qualified leads and conversion rates with videos crafted for individuals, made at scale.
                    </p>
                    <button className="text-white lg:block bg-black mt-4 px-3 py-2 rounded-3xl hover:bg-fuchsia-600">
                        Learn more
                    </button>
                </motion.div>

                {/* Image with Animation */}
                <motion.img
                    className="lg:h-[500px] lg:w-[618px] lg:mr-[-80px]"
                    src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66a9fecef2bdc8ab51fc0436_Frame%20538%20(1)-p-1600.webp"
                    alt=""
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
            </div>
        </motion.section>
    );
};

export default Section7;