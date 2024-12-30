"use client";

import Section8Box from "./Section8Box";


const Section8 = () => {
    return (
        <div className="mx-64 px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-14 items-center">
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* AICPA SOC Badge */}
                    <div className="bg-gray-50 rounded-3xl p-6 h-60 flex flex-col justify-center items-center text-center">
                        <div className="rounded-full w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa009a4487cd01d6d0225d_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" alt="image1" />
                        </div>
                        <p className="text-sm">SOC 2 Type 2 Compliant</p>
                    </div>
                    <div className="bg-green-400 rounded-3xl p-6 h-60 flex flex-col items-center text-center">
                        <div className=" w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa0100859bacb9d46731fa_65647d339c017f844ae8fe20_c2pa%201.avif" alt="image1" />
                        </div>
                        <p className="text-sm">Coalition for Content Provenance and Authenticity (C2PA)</p>
                    </div>
                    <div className="bg-green-400 rounded-3xl p-6 h-60 flex flex-col items-center text-center">
                        <div className="rounded-full w-20 h-20 mb-4 flex items-center justify-center mix-blend-multiply">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa01427b43ab524e8a7d54_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" alt="image1" />
                        </div>
                        <p className="text-sm">Content Authenticity Initiative</p>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-6 h-60 flex flex-col items-center text-center">
                        <div className=" rounded-full w-20 h-20 mb-4 flex items-center justify-center">
                            <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa016c9633c8dbdf53f9dc_Top_Layer.avif" alt="image1" />
                        </div>
                        <p className="text-sm">General Data Protection Regulation Compliant</p>
                    </div>
                </div>

                <div className="space-y-6 mx-auto">
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
                </div>
            </div>
        </div>
    )

}

export default Section8;