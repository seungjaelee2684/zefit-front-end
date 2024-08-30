import { useEffect, useState } from "react";

interface NavModalProps {
    navModalRef: React.RefObject<HTMLUListElement>;
    navValue: {
        id: string,
        href: string,
        list: {
            id: string,
            href: string
        }[] | undefined
    }[] | undefined;
};

export default function NavModal({ navModalRef, navValue }: NavModalProps) {

    const [navHover, setNavHover] = useState<{
        id: string,
        href: string
    }[] | undefined>(undefined);

    return (
        <ul ref={navModalRef} className="w-[160px] h-fit absolute top-[60px] left-0 z-20 bg-white animate-custom-fade-in">
            {navValue?.map((item: any, index: number) =>
                <li
                    key={index}
                    onMouseOver={() => setNavHover(item?.list)}
                    onMouseLeave={() => setNavHover(undefined)}
                    className="w-full h-[40px] flex justify-between items-center text-gray-400 box-border pl-4 pr-4 text-[14px] cursor-pointer text-shadow-none
                    hover:bg-gray-200 hover:text-[#444444] hover:pl-5 transition-all relative">
                    <a href={item?.href}>{item?.id}</a>
                    {(item?.list === navHover)
                        && navHover?.map((value: any, idx: number) =>
                            <ul className="absolute top-0 right-[-160px] bg-white w-[160px] h-fit flex justify-start items-center">
                                <li className="w-full h-[40px]"></li>
                            </ul>)}
                </li>
            )}   
        </ul>
    )
};