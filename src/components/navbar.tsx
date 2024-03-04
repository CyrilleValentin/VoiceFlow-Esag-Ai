/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="flex justify-between bg-[#020415] h-24 w-full items-center">
            <div className="logo flex flex-row w-[10rem] h-14 justify-center items-center gap-4 ">
                <Image className="rounded-full" width={40} height={20} src="/chat.jpg" alt="logo" />
                <span className="text-white">Esag <span className="text-[#7145FF]">AI</span></span>
            </div>
            <nav className=" bg-[#010314] flex w-[25rem] h-14 justify-center items-center">
                <ul className="flex text-gray-400 gap-4  ">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Fonctionnalités</a></li>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="auth text-white flex gap-4">
                <button className="w-22 h-10 rounded-2xl bg-[#010314] border-2 px-2 border-[#7145FF]">Se connecter </button>
                <button className="w-22 h-10 rounded-2xl bg-[#010314] px-2 border-[#7145FF] border-2">S'inscrire</button>
            </div>
        </header>
    )
}
export default Navbar;