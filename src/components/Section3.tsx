"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import { useRef, useState } from "react";
const Section3 = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
    const [isMuted, setIsMuted] = useState(true); // State to track mute status

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Toggle the muted property
            setIsMuted(!isMuted); // Update state
        }
    }
    return (
        <section>
            <div className="mt-20 text-left mx-8 sm:text-center ">
                <h2 className="text-4xl lg:text-5xl weight-400 mb-5">Video for content creators like you.</h2>
                <p className="text-lg">
                    Whatever you do, whoever you work with — here's how HeyGen can help.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center items-center mt-16 gap-10">

                {/* <video className="w-4/12 border rounded-xl max-h-96" src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727421678/WebFlow/zscnxyrjlqtmial5j3kr.mp4"></video> */}
                {/* <div className="w-[450px] border rounded-xl mx-4 h-[250px] bg-black">

</div> */}

                <div className="relative">
                    <video className="rounded-2xl w-[450px] mx-auto" ref={videoRef} loop autoPlay muted>
                        <source src="https://resource.heygencdn.com/homepage/AImail_final_opt.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video><button
                        onClick={toggleMute}
                        className="px-4 py-2 absolute top-14 left-24 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                    >
                        {isMuted ? <IoVolumeMute className="text-black" /> : <GoUnmute className="text-black" />}
                    </button>
                </div>

                <div className="mx-7 lg:h-[250px]">
                    <Accordion className="w-96" type="single" collapsible>
                        <AccordionItem value="item-1" >
                            <AccordionTrigger>Marketing</AccordionTrigger>
                            <AccordionContent className="relative">

                                <h1 >Make product explainers and how-to's for anyone, anywhere, instantly.
                                </h1>
                                <p className="text-purple-600 absolute bottom-1 right-1"><FaArrowRight className="inline" /> Learn more</p>



                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Sales</AccordionTrigger>
                            <AccordionContent className="relative">
                                <h1>
                                    Train new reps, provide the latest competitive intelligence, and teach reps to sell new products with localized, engaging videos they can watch on-demand. Or reach out to leads with personalized videos made just for them.
                                </h1>
                                <p className="text-purple-600 absolute bottom-1 right-1"><FaArrowRight className="inline" /> Learn more</p>

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Learning & Development</AccordionTrigger>
                            <AccordionContent className="relative">
                                <h1> Nobody wants to read training docs and e-learning content, and now they don’t have to.</h1>

                                <p className="text-purple-600 absolute bottom-1 right-1"><FaArrowRight className="inline" /> Learn more </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Localization</AccordionTrigger>
                            <AccordionContent className="relative">
                                <h1>
                                    Translate ads, courses, video podcasts and more to reach your global audience. Say sayonara to dubbing and bonjour to AI voice and lip sync.
                                </h1>
                                <p className="text-purple-600 absolute bottom-1 right-1"><FaArrowRight className="inline" /> Learn more</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </section>
    )
}
export default Section3;