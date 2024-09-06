import { useEffect } from "react";

export default function ContactButton() {

    const scrollHeight = document.documentElement.scrollHeight;
    console.log('scrollHeight: ', scrollHeight);

    useEffect(() => {

    }, []);

    return (
        <section className="w-[70px] h-fit flex flex-col fixed bottom-10 right-4 z-20 bg-white shadow-custom-rounded rounded-sm overflow-hidden">
           <ul className="w-full h-fit flex flex-col cursor-pointer relative">
                <li className="w-full h-[70px] flex justify-center items-center bg-zefit-normal">
                    <a href="/contact" className="w-[60px] h-full flex flex-col justify-center items-center text-white text-[18px] font-semibold">
                        문의
                    </a>
                </li>
                <li className="w-full h-[70px] flex justify-center items-center">
                    <button
                        className="w-[60px] h-full flex-col flex justify-center items-center text-[14px] font-semibold"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span>△</span>
                        TOP
                    </button>
                </li>
           </ul>
        </section>
    )
};