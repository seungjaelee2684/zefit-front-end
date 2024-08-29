import { useEffect } from "react";

interface NavModalProps {
    navModalRef: React.RefObject<HTMLUListElement>;
    navValue: {
        id: string,
        href: string
    }[] | undefined;
};

export default function NavModal({ navModalRef, navValue }: NavModalProps) {

    return (
        <ul ref={navModalRef} className="w-[160px] h-fit absolute top-[60px] left-0 z-20 bg-white animate-custom-fade-in">
            {navValue?.map((item: any, index: number) =>
                <li key={index} className="w-full h-[40px] flex justify-start items-center text-gray-400 box-border px-4 text-[14px] cursor-pointer text-shadow-none
                    hover:bg-gray-200 hover:text-[#444444] hover:px-5 transition-all">
                    <a href={item?.href}>{item?.id}</a>
                </li>
            )}   
        </ul>
    )
};