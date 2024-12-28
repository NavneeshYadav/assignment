const Section5 = () => {
    return (
        <div className="mt-10 pt-20 bg-[url('https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66dc391e06db0a58c13ee13e_texture%203.avif')] bg-cover bg-center">
            <img className="mx-auto max-w-[432px] lg:max-w-[992px] rounded-2xl block" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/67521ed7073c3ab9fd2da9b0_Hompage%20Avatar.webp" alt="image" />
            <div className="mt-28 px-20 bg-violet-950 flex flex-col lg:flex-row mx-4 lg:mx-9 rounded-lg justify-center items-center">
                <div className="text-white text-left mx-auto lg:w-[700px] lg:pr-32">
                    <h2 className="text-6xl mb-5">Every video you have in every language you need.</h2>
                    <p className="text-xl mb-5 ">Update existing videos to 175 languages and dialects in minutes. We can even translate for you or add subtitles, making sure lips and voice match perfectly for the world's easiest, most effective localization.</p>
                    <button className="text-black px-3 py-2 rounded-3xl bg-white hover:bg-fuchsia-400">Learn more</button>
                </div>
                {/* <video className="rounded-2xl w-96 mt-20 mx-auto lg:mr-12 mb-12 lg:mb-12" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be%2F66e577329101468db7a867e9_HeyGen-13-Localize-580x580-081524-transcode.webm"></video> */}
             <div className="">
   <video className="rounded-2xl h-[500px] my-20" loop autoPlay muted>
                        <source src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be%2F66e577329101468db7a867e9_HeyGen-13-Localize-580x580-081524-transcode.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
             </div>
                    
            </div>
        </div>
    )
}
export default Section5;