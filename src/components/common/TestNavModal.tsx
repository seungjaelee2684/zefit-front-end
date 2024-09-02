import { aboutNavList, businessNavList, communityNavList } from "@/data/navData";
import { useEffect, useState } from "react";

interface TestNavModalProps {
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

export default function TestNavModal({ navModalRef, navValue }: TestNavModalProps) {

    const [scroll, setScroll] = useState<number>(window.scrollY);

    useEffect(() => {
        const scrollEvent = () => {
            const scrolly = window.scrollY;
            setScroll(scrolly);
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return (
        <div className={(scroll === 0)
                ? "animate-custom-fade-in fixed top-[100px] left-0 z-20 bg-white bg-opacity-90 shadow-md w-[100%] h-fit flex justify-between items-start cursor-default"
                : "animate-custom-fade-in fixed top-[60px] left-0 z-20 bg-white shadow-md w-[100%] h-fit border-t box-border flex justify-between items-start cursor-default"}>
            <div className="w-[126px] h-[1px]" />
            <ul className="min-w-[400px] h-full flex justify-start items-start font-medium text-[14px] text-[#444444]">
                <li className="min-w-[168px] h-full flex flex-col justify-start items-start">
                    {aboutNavList?.map((item: any, index: number) =>
                        <a key={index} className="w-[100%] h-[50px] flex justify-start items-center transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                            {item.id}
                        </a>
                    )} 
                </li>
                <li className="min-w-[168px] h-full flex flex-col justify-start items-start">
                    {businessNavList?.map((item: any, index: number) =>
                        <a key={index} className="w-[100%] h-[50px] flex justify-start items-center transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                            {item.id}
                        </a>
                    )} 
                </li>
                <li className="min-w-[170==68px] h-full flex flex-col justify-start items-start">
                    {communityNavList?.map((item: any, index: number) =>
                        <a key={index} className="w-[100%] h-[50px] flex justify-start items-center transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                            {item.id}
                        </a>
                    )} 
                </li>
            </ul>
            <div className="w-[217px] h-[1px]" />
        </div>
    )
};