'use client';

import { useEffect, useRef, useState } from "react"
import NavModal from "./NavModal";
import { aboutNavList, businessNavList, communityNavList } from "@/data/navData";
import TestNavModal from "./NavModal";

export default function PageHeader() {

    const headerRef = useRef<HTMLHeadElement>(null);
    const navModalRef = useRef<HTMLUListElement>(null);
    const [isKorean, setIsKorean] = useState<boolean>(false);
    const [scroll, setScroll] = useState<number>(0);
    const [navValue, setNavValue] = useState<{
        id: string,
        href: string,
        list: {
            id: string,
            href: string
        }[] | undefined
    }[] | undefined>(undefined);

    useEffect(() => {
        const scrollEvent = async () => {
            if (!headerRef.current) return;
            const scrolly = window.scrollY;
            setScroll(scrolly);

            if (scrolly !== 0) {
                headerRef.current.style.height = '60px';
            } else {
                headerRef.current.style.height = '100px';
            };
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className="transition-all ease-in-out duration-300 flex justify-center items-center bg-white shadow-custom
                text-[#444444] fixed top-0 left-0 w-full h-[100px] z-20">
            <nav className="web:w-[1170px] w-[94%] h-full flex items-center justify-between">
                <a
                    className="w-[126px] h-full flex items-center justify-start cursor-pointer"
                    href="/">
                    <img src="http://www.zefit.co.kr/theme/basic/assets/images/logo.png" alt="로고 이미지" className="w-auto h-full object-cover" />
                </a>
                <ul className="h-full flex justify-center items-center text-[16px] font-medium gap-[103px]">
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavValue(aboutNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a href="/content/company">
                            회사소개
                        </a>
                        {(navValue && (navValue[0].id === "회사개요")) && <TestNavModal navModalRef={navModalRef} navValue={navValue} />}
                    </li>
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavValue(businessNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a href="/content/zebrafish">
                            사업소개
                        </a>
                        {(navValue && (navValue[0].id === "모델")) && <TestNavModal navModalRef={navModalRef} navValue={navValue} />}
                    </li>
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavValue(communityNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a href="/notice">
                            커뮤니티
                        </a>
                        {(navValue && (navValue[0].id === "공지사항")) && <TestNavModal navModalRef={navModalRef} navValue={navValue} />}
                    </li>
                </ul>
                <div className="w-[100px] h-full flex justify-end items-center text-[16px] font-semibold">
                        <button
                            onClick={() => setIsKorean(false)}
                            className={(!isKorean)
                                ? `font-bold bg-white text-[#444444] outline-none text-[14px] cursor-pointer w-[50px] h-[24px] rounded-tl-full rounded-bl-full border border-white`
                                : `font-light bg-transparent outline-none text-[14px] cursor-pointer w-[50px] h-[24px] rounded-tl-full rounded-bl-full border border-white border-l-0`}>
                            ENG
                        </button>
                        <button
                            onClick={() => setIsKorean(true)}
                            className={(isKorean)
                                ? "font-bold bg-white text-[#444444] outline-none text-[14px] cursor-pointer w-[50px] h-[24px] rounded-tr-full rounded-br-full border border-white"
                                : "font-light bg-transparent outline-none text-[14px] cursor-pointer w-[50px] h-[24px] rounded-tr-full rounded-br-full border border-white border-l-0"}>
                            KOR
                        </button>
                </div>
            </nav>
        </header>
    )
};