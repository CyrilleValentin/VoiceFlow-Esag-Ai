/* eslint-disable react/no-unescaped-entities */
"use client"
import { cabin, inter } from "@/lib/font";
import { loadVoiceflowWidget } from "@/lib/voiceflow";


const Banniere = () => {
    return (
        <section className=" w-full h-[30rem] bg-gradient-to-b from-[#010314] from-80%  via-[#ae9aed] via-90% to-[#8464ed] to-98%  flex-col backdrop-blur-xl">
            <div className="welcome pt-8 w-full h-[25rem] flex flex-col justify-center items-center gap-4">

                <h2 className="text-[#7145FF] h-1/3 "> BIENVENUE SUR ESAG AI</h2>
                <span className={`${cabin.className} text-white  text-6xl h-[10rem] px-4 text-center`}> Rencontrez l'avenir à ESAG-NDE, guidé par l'intelligence artificielle</span>
                <p className="text-gray-300 mt-6 text-center w-[42rem]">Découvrez votre chemin vers l'excellence universitaire avec notre chatbot dédié, prêt à vous éclairer sur les filières et les détails cruciaux de l'université ESAG-NDE.</p>
                <button onClick={() =>loadVoiceflowWidget(document)} className="w-32 h-18 mt-4 text-white rounded-2xl bg-[#010314] border-2 px-2 border-[#7145FF]">Commençons</button>
            </div>
           
        </section>
    )
}
export default Banniere;