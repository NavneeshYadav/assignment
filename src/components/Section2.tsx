"use client";
const Section2 = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center align-center">
                <div className="mx-10">
                    <img src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/67521ebd070b3788dbc875c1_Homepage%20Avatar%20Block-p-800.webp" alt="image" />
                </div>
                <div className="text-left flex flex-col justify-center item mx-10 mt-8">
                    <h2 className="text-6xl">Meet your new spokesperson.</h2>
                    <div className="mt-4">
                        It’s you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. Change voice, clothes, or background with a click.
                    </div>
                    <div className="mt-4">
                        <button className="text-white bg-black border px-3 py-2 rounded-3xl hover:bg-fuchsia-600">Sign up for free</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section2;