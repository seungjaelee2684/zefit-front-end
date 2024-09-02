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

    const [scroll, setScroll] = useState<number>(window.scrollY);

    useEffect(() => {
        const scrollEvent = () => {
            const scrolly = window.scrollY;
            setScroll(scrolly);
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        }
    }, []);

    return (
        <ul
            ref={navModalRef}
            className={(scroll === 0)
                ? "w-[160px] h-fit absolute top-[100px] left-0 z-20 bg-white animate-custom-fade-in shadow-md font-medium"
                : "w-[160px] h-fit absolute top-[60px] left-0 z-20 bg-white animate-custom-fade-in shadow-md font-medium"}>
            {navValue?.map((item: any, index: number) =>
                <li
                    key={index}
                    onMouseOver={() => setNavHover(item?.list)}
                    onMouseLeave={() => setNavHover(undefined)}
                    className="w-full h-[40px] flex justify-between items-center text-gray-400 box-border pl-4 pr-2 text-[14px] cursor-pointer text-shadow-none
                    hover:bg-gray-200 hover:text-[#444444] hover:pl-5 transition-all relative">
                    <a href={item?.href} className="w-full flex justify-between">{item?.id}</a>
                    {(item?.list === navHover && navHover)
                        && <ul className="animate-custom-fade-in absolute top-0 right-[-160px] bg-white w-[160px] h-fit flex flex-col justify-start items-center shadow-md">
                            {navHover?.map((value: any, idx: number) =>
                                <li 
                                    key={idx}
                                    className="w-full h-[40px] flex justify-start items-center pl-4 pr-2 text-[14px] cursor-pointer text-gray-400 box-border
                                        hover:bg-gray-200 hover:text-[#444444] hover:pl-5 transition-all">
                                    <a href={value?.href}>{value.id}</a>
                                </li>)}
                        </ul>}
                    {(item?.list) && <div className="text-[8px]">{"〉"}</div>}
                </li>
            )}
        </ul>
    )
};