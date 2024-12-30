"use client";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import { useRef, useState } from "react";

const Section6 = () => {
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
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-20 gap-10">
                <div className="relative">
                    <video className="rounded-2xl mx-auto w-[75%] h-[75%]" ref={videoRef} loop autoPlay muted>
                        <source src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727308222/HeyGen-2.0-StreamingAvatar-1400x1600-081524_npuqow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video><button
                        onClick={toggleMute}
                        className="px-4 py-2 absolute top-14 left-24 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                    >
                        {isMuted ? <IoVolumeMute className="text-black" /> : <GoUnmute className="text-black" />}
                    </button>
                </div>
                {/* <video className="rounded-2xl" src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727308222/HeyGen-2.0-StreamingAvatar-1400x1600-081524_npuqow.mp4"></video> */}
                <div className="mx-8 lg:w-4/12">
                    <h1 className="text-3xl lg:text-5xl ">Do it live</h1>
                    <p className="mt-9">
                        Your customers can speak to your avatar live. They ask questions and an avatar responds, using your knowledge base and an LLM to enable a natural conversation with a person, not a painful interaction with a chat-bot.
                    </p>
                    <button className="text-white bg-black border mt-6 px-3 py-2 rounded-3xl hover:bg-purple-800">See a demo</button>
                </div>
            </div>


        </section>
    )
}
export default Section6;