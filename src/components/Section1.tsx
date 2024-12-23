const Section1 = () => {
    return (
        <section className="py-7 flex sm:flex-col lg:flex-col">
            <h1 className="text-6xl text-center">Create and translate videos <br />with HeyGen's AI Video Generator</h1>
            <p className="text-xl mt-3 text-center">Produce studio-quality videos in 175 languages without a camera or crew.</p>
            <div className="w-40 mt-4 text-center mx-auto">
                <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Sign up for free</button>
            </div>
            <p className="text-sm mt-3 mb-5 text-center">
                Unlimited video | No credit card needed
            </p>
            <video className="rounded-3xl mx-16">
                <source src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4" type="video/mp4" />
            </video>

            <div className="text-center flex flex-row gap-2 justify-center mt-3">
                <p>
                    Trusted by over 45,000 customers |
                </p>
                <img className="size-6" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f199f848e447ac8da0de24_Frame.webp" alt="" />
                <p>
                    Rated 4.8/5 on G2
                </p>
            </div>

        </section>
    )

}
export default Section1;