"use client";

import { motion } from "framer-motion";

const Section8 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto lg:mx-48 px-4 py-12"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-14 items-center">
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Badge 1: SOC 2 Type 2 */}
                    <motion.div
                        className="bg-gray-300 rounded-3xl p-6 h-60 flex flex-col justify-center items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="rounded-full w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa009a4487cd01d6d0225d_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" alt="SOC 2" />
                        </div>
                        <p className="text-sm">SOC 2 Type 2 Compliant</p>
                    </motion.div>

                    {/* Badge 2: C2PA */}
                    <motion.div
                        className="bg-green-400 rounded-3xl p-6 h-60 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className=" w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa0100859bacb9d46731fa_65647d339c017f844ae8fe20_c2pa%201.avif" alt="C2PA" />
                        </div>
                        <p className="text-sm">Coalition for Content Provenance and Authenticity (C2PA)</p>
                    </motion.div>

                    {/* Badge 3: Content Authenticity Initiative */}
                    <motion.div
                        className="bg-green-400 rounded-3xl p-6 h-60 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="rounded-full w-20 h-20 mb-4 flex items-center justify-center mix-blend-multiply">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa01427b43ab524e8a7d54_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" alt="Content Authenticity Initiative" />
                        </div>
                        <p className="text-sm">Content Authenticity Initiative</p>
                    </motion.div>

                    {/* Badge 4: GDPR Compliance */}
                    <motion.div
                        className="bg-gray-300 rounded-3xl p-6 h-60 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="rounded-full w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa016c9633c8dbdf53f9dc_Top_Layer.avif" alt="GDPR" />
                        </div>
                        <p className="text-sm">General Data Protection Regulation Compliant</p>
                    </motion.div>
                </div>

                {/* Text Section */}
                <motion.div
                    className="space-y-6 mt-8 lg:mt-0 mx-auto"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="space-y-2">
                        <h2 className="text-4xl lg:text-5xl font-medium">Secure.</h2>
                        <h2 className="text-4xl lg:text-5xl font-medium">Responsible.</h2>
                        <h2 className="text-4xl lg:text-5xl font-medium">Ethical.</h2>
                    </div>
                    <p className="text-gray-600 text-lg">
                        We are committed to safety, security, and ethical use of our service. AI avatars can only be created and shared with express consent and cannot be used to spread content that's harmful to others.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-black text-white rounded-3xl hover:bg-fuchsia-600">
                        Learn about Trust & Safety
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Section8;