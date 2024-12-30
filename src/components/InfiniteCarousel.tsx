"use client";

import Image from 'next/image';

const images = [
    '/images/image1.avif',
    '/images/image6.avif',
    '/images/image7.avif',
    '/images/image8.avif',
    '/images/image5.webp', // Add as many images as needed
];

export default function InfiniteCarousel() {
    return (

        <div className="overflow-hidden relative w-full h-64 mt-20 mb-20">
            {/* Blur overlay on the left */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>

            {/* Blur overlay on the right */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
            <div className="flex w-[200%] animate-scroll">
                {/* Repeat images twice for seamless loop */}
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-1/8 mx-3">
                        <Image
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            width={300}
                            height={300}
                            className="object-cover w-full h-48 rounded-lg"
                        />
                    </div>
                ))}
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-1/8 mx-3">
                        <Image
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            width={300}
                            height={300}
                            className="object-cover w-full h-48 rounded-lg"
                        />
                    </div>
                ))}
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-1/8 mx-3">
                        <Image
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            width={300}
                            height={300}
                            className="object-cover w-full h-48 rounded-lg"
                        />
                    </div>
                ))}
                {images.concat(images).map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-1/8 mx-3">
                        <Image
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            width={300}
                            height={300}
                            className="object-cover w-full h-48 rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}
