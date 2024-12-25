"use client";

import Section8Box from "./Section8Box";


const Section8 = () => {
    return (
        <div className="flex lg:flex-row mt-8 lg:mx-64">
            <div className="grid lg:grid-cols-2 gap-3">
                <Section8Box cont="SOC 2 Type 2 Compliant" />
                <Section8Box cont="Coalition for Content Provenance and Authenticity (C2PA)" />
                <Section8Box cont="Content Authenticity Initiative" />
                <Section8Box cont="General Data Protection Regulation Compliant" />
            </div>

            <div className="text-left">
                <h1 className="text-5xl weight-400 mb-2">Secure.</h1>
                <h1 className="text-5xl weight-400 mb-2">Responsible.</h1>
                <h1 className="text-5xl weight-400 mb-2">Secure.</h1>
                <p className="text-lg">
                    Your customers can speak to your avatar live. They ask questions and an avatar responds, using your knowledge base and an LLM to enable a natural conversation with a person, not a painful interaction with a chat-bot.
                </p>
                <button className="text-white lg:block bg-black border mt-4 px-3 py-2 rounded-3xl hover:bg-fuchsia-600">See a demo</button>
            </div>
        </div>
    )

}

export default Section8;