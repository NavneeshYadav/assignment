"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Section2 = () => {
    return (
        <section>
            <div className="mt-20 text-left mx-8 sm:text-center ">
                <h2 className="text-5xl weight-400 mb-5">Video for content creators like you.</h2>
                <p className="text-lg">
                    Whatever you do, whoever you work with — here's how HeyGen can help.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center items-center mt-16 gap-10">

                {/* <video className="w-4/12 border rounded-xl max-h-96" src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727421678/WebFlow/zscnxyrjlqtmial5j3kr.mp4"></video> */}
<div className="w-[450px] border rounded-xl mx-4 h-[250px] bg-black">

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
export default Section2;