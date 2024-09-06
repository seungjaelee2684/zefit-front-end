import { aboutNavList, businessNavList, communityNavList } from "@/data/navData";
import { useEffect, useState } from "react";

interface TestNavModalProps {
    navModalRef: React.RefObject<HTMLUListElement>;
    navOpen: boolean;
};

export default function TestNavModal({ navModalRef, navOpen }: TestNavModalProps) {

    const [scroll, setScroll] = useState<number>(window.scrollY);
    const [nav, setNav] = useState<{
        service: boolean,
        pharmaceutical: boolean
    }>({
        service: false,
        pharmaceutical: false
    });
    const { service, pharmaceutical } = nav;

    const onClickNavOpenHandler = (item: any) => {
        if (!item?.list) return;
        if (item?.id === '서비스') {
            setNav({ ...nav, service: !service });
        } else if (item?.id === '신약개발') {
            setNav({ ...nav, pharmaceutical: !pharmaceutical });
        }
    };

    const modalStyle = () => {
        if (scroll === 0) {
            return "animate-custom-fade-in fixed top-[100px] left-0 z-20 bg-white bg-opacity-90 shadow-md w-[100%] h-fit flex justify-between items-start cursor-default";      
        } else {
            return "animate-custom-fade-in fixed top-[60px] left-0 z-20 bg-white shadow-md w-[100%] h-fit border-t box-border flex justify-between items-start cursor-default";
        };
    };

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
        <div className={modalStyle()}>
            <div className="w-[126px] h-[1px]" />
            <ul className="max-w-[400px] h-fit flex justify-start items-start font-medium text-[14px] text-[#444444]">
                <li className="min-w-[169px] h-fit flex flex-col justify-start items-start">
                    {aboutNavList?.map((item: any, index: number) =>
                        <a
                            key={index}
                            href={item.href}
                            className="w-[100%] h-[50px] flex justify-between items-center pr-[40px] transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                            {item.id}
                        </a>
                    )}
                </li>
                <li className="min-w-[169px] h-fit flex flex-col justify-start items-start">
                    {businessNavList?.map((item: any, index: number) =>
                        <div key={index} className="w-full min-h-[50px] flex flex-col">
                            <a
                                href={(!item.list) && item.href}
                                onClick={() => onClickNavOpenHandler(item)}
                                className="w-[100%] h-[50px] flex justify-between items-center pr-[40px] transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                                {item.id}
                                {(item.list) && <span className="text-[8px]">▼</span>}
                            </a>
                            {(item.id === "서비스" && service)
                                && <ul className="w-full h-fit flex flex-col border-y">
                                    {item.list.map((list: any, idx: number) =>
                                        <li
                                            key={idx}
                                            className="w-[100%] h-[50px] text-[12px] flex justify-start items-center pl-[10px] pr-[40px] transition-all box-border cursor-pointer hover:text-zefit-heavy group">
                                            <a href={list.href} className="flex justify-center items-center gap-2">
                                                <span className="w-[2px] h-[2px] rounded-full bg-[#444444] group-hover:bg-zefit-heavy" />
                                                {list.id}
                                            </a>
                                        </li>
                                    )}
                                </ul>}
                            {(item.id === "신약개발" && pharmaceutical)
                                && <ul className="w-full h-fit flex flex-col border-t">
                                    {item.list.map((list: any, idx: number) =>
                                        <li
                                            key={idx}
                                            className="w-[100%] h-[50px] text-[12px] flex justify-start items-center pl-[10px] pr-[40px] transition-all box-border cursor-pointer hover:text-zefit-heavy group">
                                            <a href={list.href} className="flex justify-center items-center gap-2">
                                                <span className="w-[2px] h-[2px] rounded-full bg-[#444444] group-hover:bg-zefit-heavy" />
                                                {list.id}
                                            </a>
                                        </li>
                                    )}
                                </ul>}
                        </div>
                    )}
                </li>
                <li className="min-w-[169px] h-fit flex flex-col justify-start items-start">
                    {communityNavList?.map((item: any, index: number) =>
                        <a key={index} className="w-[100%] h-[50px] flex justify-between items-center pr-[40px] transition-all box-border cursor-pointer hover:pl-[4px] hover:text-zefit-heavy">
                            {item.id}
                        </a>
                    )}
                </li>
            </ul>
            <div className="w-[100px] h-[1px]" />
        </div>
    )
};