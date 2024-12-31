"use client";
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
    <FigmaLogoIcon width={60} height={60} className="text-gray-300" />,
    <FramerLogoIcon width={60} height={60} className="text-gray-300" />,
    <SketchLogoIcon width={60} height={60} className=" text-gray-300" />,
    <TwitterLogoIcon width={60} height={60} className="text-gray-300" />,
    <GitHubLogoIcon width={60} height={60} className="text-gray-300" />,
    <VercelLogoIcon width={60} height={60} className="text-gray-300" />,
    <NotionLogoIcon width={60} height={60} className="text-gray-300" />,
    <DiscordLogoIcon width={60} height={60} className="text-gray-300" />,
    <InstagramLogoIcon width={60} height={60} className="text-gray-300" />,
    <LinkedInLogoIcon width={60} height={60} className="text-gray-300" />,
];

export const InfiniteSlider = () => {
    return (
        <div className="mb-20 relative m-auto lg:w-[1450px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex">
                {[...Array(5)].map((_, iterationIndex) =>
                    LOGOS.map((logo, logoIndex) => (
                        <div
                            className="slide flex w-[125px] mx-5 lg:mx-24 items-center justify-center"
                            key={`${iterationIndex}-${logoIndex}`}
                        >
                            {logo}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
