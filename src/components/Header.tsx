'use client';

import { useEffect, useRef, useState } from "react"
import NavModal from "./NavModal";
import { aboutNavList, businessNavList, communityNavList } from "@/data/navData";

export default function Header() {

    const headerRef = useRef<HTMLHeadElement>(null);
    const [isKorean, setIsKorean] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');
    const [scroll, setScroll] = useState<number>(0);
    const [navValue, setNavValue] = useState<{
        id: string,
        href: string
    }[] | undefined>(undefined);

    useEffect(() => {
        const scrollEvent = async () => {
            if (!headerRef.current) return;
            const scrolly = window.scrollY;
            setScroll(scrolly);

            if (scrolly !== 0) {
                headerRef.current.style.height = '60px';
                headerRef.current.style.backgroundColor = '#FFFFFF';
                headerRef.current.style.color = '#444444';
                headerRef.current.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';

                setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo.png');
            } else {
                headerRef.current.style.height = '100px';
                headerRef.current.style.backgroundColor = 'transparent';
                headerRef.current.style.color = '#FFFFFF';
                headerRef.current.style.boxShadow = 'none';

                setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');
            };
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return (
        <header ref={headerRef} className="transition-all ease-in-out duration-300 flex justify-center items-center fixed top-0 left-0 w-[100%] h-[100px] z-20 text-white">
            <nav className="web:w-[1170px] w-[94%] h-[100%] flex items-center justify-between">
                <a
                    className={(scroll === 0)
                        ? 'w-auto h-[100%] flex items-center justify-center cursor-pointer'
                        : 'w-auto h-[95%] flex items-center justify-center cursor-pointer'}
                    href="/">
                    <img src={url} alt="로고 이미지" className="w-[100%] h-[100%]" />
                </a>
                <ul className="w-[34%] h-[100%] flex justify-between items-center text-[16px] font-medium text-shadow-sm">
                    <li
                        className="h-[100%] flex justify-center items-center relative"
                        onMouseOver={() => setNavValue(aboutNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a className="cursor-pointer" href="/content/company">
                            회사소개
                        </a>
                        {(navValue && (navValue[0].id === "회사개요")) && <NavModal />}
                    </li>
                    <li
                        className="h-[100%] flex justify-center items-center relative"
                        onMouseOver={() => setNavValue(businessNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a className="cursor-pointer" href="/content/zebrafish">
                            사업소개
                        </a>
                        {(navValue && (navValue[0].id === "모델")) && <NavModal />}
                    </li>
                    <li
                        className="h-[100%] flex justify-center items-center relative"
                        onMouseOver={() => setNavValue(communityNavList)}
                        onMouseLeave={() => setNavValue(undefined)}>
                        <a className="cursor-pointer" href="/notice">
                            커뮤니티
                        </a>
                        {(navValue && (navValue[0].id === "공지사항")) && <NavModal />}
                    </li>
                </ul>
                <ul className="w-[17%] h-[100%] flex justify-between items-center text-[16px] font-semibold">
                    <li className="h-[100%] flex justify-center items-center gap-3">
                        <button
                            onClick={() => setIsKorean(false)}
                            className={(!isKorean)
                                ? `font-bold bg-transparent outline-none text-[14px] cursor-pointer w-[30px] border-b-2`
                                : `font-light bg-transparent border-none outline-none text-[14px] cursor-pointer w-[30px]`}>
                            ENG
                        </button>
                        <div className="w-[1px] h-[14px] bg-inherit" />
                        <button
                            onClick={() => setIsKorean(true)}
                            className={(isKorean)
                                ? "font-bold bg-transparent outline-none text-[14px] cursor-pointer w-[30px] border-b-2"
                                : "font-light bg-transparent border-none outline-none text-[14px] cursor-pointer w-[30px]"}>
                            KOR
                        </button>
                    </li>
                    <li>
                        <a href="/contact" className="py-[6px] px-[12px] border border-solid rounded-lg font-medium hover:bg-zefit-heavy hover:border-zefit-heavy">
                            문의하기
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};