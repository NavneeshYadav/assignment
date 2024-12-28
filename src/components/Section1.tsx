"use client";

import { useRef, useState } from "react";
import { InfiniteSlider } from "./InfiniteSlider";

import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";


const Section1: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
    const [isMuted, setIsMuted] = useState(true); // State to track mute status

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Toggle the muted property
            setIsMuted(!isMuted); // Update state
        }
    }
    return (
        <section className="py-7 flex sm:flex-col">
            <div>
                <h1 className="text-6xl text-center">Create and translate videos <br />with HeyGen's AI Video Generator</h1>
                <p className="text-xl mt-3 text-center">Produce studio-quality videos in 175 languages without a camera or crew.</p>
                <div className="w-40 mt-4 text-center mx-auto">
                    <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Sign up for free</button>
                </div>
                <p className="text-sm mt-3 mb-5 text-center">
                    Unlimited video | No credit card needed
                </p>
                {/* <video className="rounded-3xl">
                    <source src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4" type="video/mp4" />
                </video> */}
                {/* <div className="rounded-3xl min-h-96 mx-16 bg-black">

                </div> */}

                <div className="relative">
                    <video className="rounded-2xl w-11/12 mx-auto" ref={videoRef} loop autoPlay muted>
                        <source src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video><button
                        onClick={toggleMute}
                        className="px-4 py-2 absolute top-14 left-24 bg-white text-white font-bold rounded-lg shadow focus:outline-none focus:ring focus:ring-transparent"
                    >
                        {isMuted ? <IoVolumeMute className="text-black"/> : <GoUnmute className="text-black"/>}
                    </button>
                </div>

                <div className="text-center flex flex-row gap-2 justify-center mt-3">
                    <p>
                        Trusted by over 45,000 customers
                    </p>
                    |
                    <img className="size-6" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f199f848e447ac8da0de24_Frame.webp" alt="" />
                    <p>
                        Rated 4.8/5 on G2
                    </p>
                </div>
                {/* <InfiniteSlider /> */}

            </div>
        </section>
    )

}
export default Section1;