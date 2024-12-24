"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Section2 = () => {
    return (
        <section>
            <div className="mt-20 text-center ">
                <h2 className="text-5xl  weight-400 mb-5">Video for content creators like you.</h2>
                <p className="text-lg">
                    Whatever you do, whoever you work with — here’s how HeyGen can help.
                </p>
            </div>
            <div className="flex lg:flex-row  justify-center align-center mt-16 gap-10">

                <video className="w-4/12 border rounded-xl" src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727421678/WebFlow/zscnxyrjlqtmial5j3kr.mp4"></video>

                <div>
                    <Accordion className="w-96" type="single" collapsible>
                        <AccordionItem value="item-1" >
                            <AccordionTrigger>Marketing</AccordionTrigger>
                            <AccordionContent>
                                Make product explainers and how-to’s for anyone, anywhere, instantly.

                            
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Sales</AccordionTrigger>
                            <AccordionContent>
                                Train new reps, provide the latest competitive intelligence, and teach reps to sell new products with localized, engaging videos they can watch on-demand. Or reach out to leads with personalized videos made just for them.

                          
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Learning & Development</AccordionTrigger>
                            <AccordionContent>
                                Nobody wants to read training docs and e-learning content, and now they don’t have to.

                                <button>Learn more</button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Localization</AccordionTrigger>
                            <AccordionContent>
                                Translate ads, courses, video podcasts and more to reach your global audience. Say sayonara to dubbing and bonjour to AI voice and lip sync.
                                <button>Learn more</button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </section>
    )
}
export default Section2;