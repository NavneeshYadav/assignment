"use client";




export default function LoginPage() {


    return (
        <div className="flex lg:flex-row justify-center items-center h-screen">
            <div className="flex flex-col px-20 justify-center items-center bg-slate-200 bg-[url('https://app.heygen.com/assets/green_texture-c3f9ff03.png')] bg-cover bg-center w-[600px] h-[600px] rounded-2xl">
                <h1 className="text-left text-4xl font-bold">Create, Translate, and  Personalize <br /><span className="text-violet-600">
                    Videos in Minutes
                </span></h1>
                <p className="text-zinc-500">Create stunning videos with ease. Create your own or choose from our library of AI avatars and voices - in over 175 languages.</p>
                <div className="rounded-2xl mt-4 bg-black w-[450px] h-[300px]">

                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    )
}

