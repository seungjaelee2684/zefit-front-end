import { useEffect } from "react";

export default function ScrollAmount() {

    const scrollHeight = document.documentElement.scrollHeight;
    console.log('scrollHeight: ', scrollHeight);

    useEffect(() => {

    }, []);

    return (
        <section className="w-[70px] h-fit flex flex-col fixed bottom-10 right-0 z-20 bg-white shadow-custom-rounded rounded-sm">
           <ul className="w-full h-fit flex flex-col cursor-pointer relative">
                <div className="w-[30px] h-[30px] absolute top-[-15px] left-[20px] rounded-full bg-zefit-normal text-white text-[24px] flex justify-center items-center">
                    ☎
                </div>
                <li className="w-full h-[70px] flex justify-center items-center bg-zefit-normal">
                    <a href="/contact" className="w-[60px] h-full flex flex-col justify-center items-center text-white text-[14px] font-semibold">
                        <span>☎</span>
                        문의
                    </a>
                </li>
                <li className="w-full h-[70px] flex justify-center items-center">
                    <button
                        className="w-[60px] h-full flex-col flex justify-center items-center text-[14px] font-semibold"
                        onClick={() => window.scrollTo({ top: 0 })}>
                        <span>△</span>
                        TOP
                    </button>
                </li>
           </ul>
        </section>
    )
};