"use client";
import Link from "next/link"

import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="w-full py-12 bg-gray-200">
            <div className="flex lg:flex-row">
                <div className="lg:ml-8 lg:mr-20">
                    <Link href="/" className="text-xl font-bold">
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg" alt="internet connection issue" />
                    </Link>
                    <div className="w-40 mt-8 text-center">
                        <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Sign up for free</button>
                        <button className="text-black lg:block ml-3 bg-gray-300 mt-4 px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Login</button>
                    </div>

                </div>

                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-4">
                        {/* Pricing Column */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Pricing</h3>
                            <ul className="space-y-3">
                                <li><Link href="/pricing" className="hover:text-purple-600">Pricing Plans</Link></li>
                                <li><Link href="/api-pricing" className="hover:text-purple-600">API Pricing</Link></li>
                            </ul>
                        </div>

                        {/* Products Column */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Products</h3>
                            <ul className="space-y-3">
                                <li><Link href="/avatar-video" className="hover:text-purple-600">Avatar Video</Link></li>
                                <li><Link href="/api" className="hover:text-purple-600">API</Link></li>
                                <li><Link href="/video-translation" className="hover:text-purple-600">Video Translation</Link></li>
                                <li><Link href="/personalized-video" className="hover:text-purple-600">Personalized Video</Link></li>
                                <li><Link href="/interactive-avatar" className="hover:text-purple-600">Interactive Avatar</Link></li>
                            </ul>
                        </div>

                        {/* Industry Column */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Industry</h3>
                            <ul className="space-y-3">
                                <li><Link href="/agencies" className="hover:text-purple-600">Agencies</Link></li>
                                <li><Link href="/e-learning" className="hover:text-purple-600">E-Learning</Link></li>
                            </ul>


                        </div>

                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Teams</h3>
                            <ul className="space-y-3">
                                <li><Link href="/marketing" className="hover:text-purple-600">Marketing</Link></li>
                                <li><Link href="/learning-development" className="hover:text-purple-600">Learning & Development</Link></li>
                                <li><Link href="/localization" className="hover:text-purple-600">Localization</Link></li>
                                <li><Link href="/sales-enablement" className="hover:text-purple-600">Sales Enablement</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">HeyGen for Enterprise</h3>
                            <ul className="space-y-3">
                                <li><Link href="/marketing" className="hover:text-purple-600">Enterprise</Link></li>
                                <li><Link href="/learning-development" className="hover:text-purple-600">Contact Sales</Link></li>

                            </ul>
                        </div>

                        {/* Features & Resources Column */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Features</h3>
                            <ul className="space-y-3">
                                <li><Link href="/ai-avatars" className="hover:text-purple-600">AI Avatars</Link></li>
                                <li><Link href="/ai-voices" className="hover:text-purple-600">AI Voices</Link></li>
                                <li><Link href="/ai-tools" className="hover:text-purple-600">AI Tools</Link></li>
                                <li><Link href="/product-overviews" className="hover:text-purple-600">Product Overviews</Link></li>
                                <li><Link href="/scaled-outreach" className="hover:text-purple-600">Scaled Outreach</Link></li>
                                <li><Link href="/zapier-integration" className="hover:text-purple-600">Zapier Integration</Link></li>
                            </ul>
                        </div>

                        {/* Additional Columns */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Resources</h3>
                            <ul className="space-y-3">
                                <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
                                <li><Link href="/customer-stories" className="hover:text-purple-600">Customer Stories</Link></li>
                                <li><Link href="/affiliate-program" className="hover:text-purple-600">Affiliate Program</Link></li>
                                <li><Link href="/help-center" className="hover:text-purple-600">Help Center</Link></li>
                                <li><Link href="/community" className="hover:text-purple-600">Community</Link></li>
                                <li><Link href="/tutorials" className="hover:text-purple-600">Tutorials</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="space-y-4">
                            <h3 className="text-purple-600 font-medium">Company</h3>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="hover:text-purple-600">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-purple-600">Careers</Link></li>
                                <li><Link href="/security" className="hover:text-purple-600">Security Portal</Link></li>
                                <li><Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-purple-600">Terms of Service</Link></li>
                                <li><Link href="/cookie-preference" className="hover:text-purple-600">Cookie Preference</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#18191b] mx-10 mt-10 mb-10 h-[1px]">

            </div>
            <div className="flex flex-col mx-10 lg:flex-row justify-between lg:items-center">
                <div>
                    <p>
                        @Copyright HeyGen
                    </p>
                    <p>
                        12130 Millennium Drive Suite 300, Los Angeles, CA
                    </p>
                    <p>
                        90094
                    </p>
                </div>
                <div className="flex flex-row mx-24 gap-3">

                    <Image src="/images/image2.avif" alt={"image2"} width={70}
                        height={20} />
                    <Image src="/images/image3.avif" alt={"image3"} width={30}
                        height={20} />

                </div>
                <div className="flex flex:row gap-3 ">
                    <Link href="https://www.linkedin.com/company/heygen/?viewAsMember=true">
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd9051fee2df87e82563_linkedin.avif" alt="linkedin" width="20px"/>
                    </Link>
                    <Link href="https://www.youtube.com/@heygen_official">
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd826ef9246156379c4f_youtube.avif" alt="youtube" width="20px"/>
                    </Link>
                    <Link href="https://twitter.com/x/migrate?tok=7b2265223a222f68657967656e5f6f6666696369616c222c2274223a313733353331313738347df68061749d1997bae7b7362684598508">
                        <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd8219d2cec985edaef9_x.avif" alt="twitter" width="20px"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

