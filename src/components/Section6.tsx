"use client";


const Section6 = () => {
    return (
        <section>
            <div className="flex flex-col lg:flex-row  justify-center align-center mx-64 mt-16 gap-5">
                <video className="rounded-2xl" src="https://res.cloudinary.com/diqmvbeg6/video/upload/q_auto/v1727308222/HeyGen-2.0-StreamingAvatar-1400x1600-081524_npuqow.mp4"></video>
                <div className=" text-left ml-4">
                    <h1 className="text-5xl weight-400 mb-5">Do it live</h1>
                    <p className="text-lg">
                        Your customers can speak to your avatar live. They ask questions and an avatar responds, using your knowledge base and an LLM to enable a natural conversation with a person, not a painful interaction with a chat-bot.
                    </p>
                    <button className="text-white bg-black border mt-4 px-3 py-2 rounded-3xl hover:bg-fuchsia-600">See a demo</button>


                </div>
            </div>


        </section>
    )
}
export default Section6;