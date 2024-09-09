'use client';

import { useEffect, useRef, useState } from "react"
import NavModal from "./NavModal";
import { aboutNavList, businessNavList, communityNavList } from "@/data/navData";

export default function HomeHeader() {

    const headerRef = useRef<HTMLHeadElement>(null);
    const navModalRef = useRef<HTMLUListElement>(null);
    const [isKorean, setIsKorean] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');
    const [scroll, setScroll] = useState<number>(window.scrollY);
    const [navOpen, setNavOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!headerRef.current) return;

        if (navOpen) {
            headerRef.current.style.backgroundColor = '#FFFFFF'
            headerRef.current.style.color = '#444444';
            headerRef.current.style.boxShadow = '0px 2px 8px rgba(139, 139, 139, 0.186)';
            headerRef.current.style.borderBottom = 'none';

            setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo.png');
        } else if (scroll !== 0) {
            headerRef.current.style.backgroundColor = '#FFFFFF'
            headerRef.current.style.color = '#444444';
            headerRef.current.style.boxShadow = '0px 2px 8px rgba(139, 139, 139, 0.186)';
            headerRef.current.style.borderBottom = 'none';

            setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo.png');
        } else {
            headerRef.current.style.backgroundColor = 'transparent';
            headerRef.current.style.color = '#FFFFFF';
            headerRef.current.style.boxShadow = 'none';
            headerRef.current.style.borderBottom = '1px solid #bdbdbdad';

            setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');
        };

        const scrollEvent = async () => {
            if (!headerRef.current) return;
            const scrolly = window.scrollY;
            setScroll(scrolly);

            if (scrolly !== 0) {
                headerRef.current.style.height = '60px';
                headerRef.current.style.backgroundColor = '#FFFFFF';
                headerRef.current.style.color = '#444444';
                headerRef.current.style.boxShadow = '0px 2px 8px rgba(139, 139, 139, 0.186)';
                headerRef.current.style.borderBottom = 'none';

                setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo.png');
            } else {
                headerRef.current.style.height = '100px';
                headerRef.current.style.backgroundColor = 'transparent';
                headerRef.current.style.color = '#FFFFFF';
                headerRef.current.style.boxShadow = 'none';
                headerRef.current.style.borderBottom = '1px solid #bdbdbdad';

                setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');
            };
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        };
    }, [navOpen]);

    return (
        <header
            ref={headerRef}
            className="transition-all ease-in-out duration-300 flex justify-center items-center text-white
                fixed top-0 left-0 w-full h-[100px] z-20">
            <nav className="web:w-[1170px] w-[94%] h-full flex items-center justify-between">
                <a
                    className="w-[126px] h-full flex items-center justify-center cursor-pointer"
                    href="/">
                    <img src={url} alt="로고 이미지" className="w-auto h-full object-cover" />
                </a>
                <ul className="w-[460px] h-full flex justify-between items-center text-[17px] font-semibold">
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavOpen(true)}
                        onMouseLeave={() => setNavOpen(false)}>
                        <a href="/content/company">
                            회사소개
                        </a>
                        {(navOpen)
                            && <NavModal
                                navModalRef={navModalRef}
                                navOpen={navOpen} />}
                    </li>
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavOpen(true)}
                        onMouseLeave={() => setNavOpen(false)}>
                        <a href="/content/zebrafish">
                            사업소개
                        </a>
                        {(navOpen)
                            && <NavModal
                                navModalRef={navModalRef}
                                navOpen={navOpen} />}
                    </li>
                    <li
                        className="h-full flex justify-center items-center relative cursor-pointer"
                        onMouseOver={() => setNavOpen(true)}
                        onMouseLeave={() => setNavOpen(false)}>
                        <a href="/notice">
                            커뮤니티
                        </a>
                        {(navOpen)
                            && <NavModal
                                navModalRef={navModalRef}
                                navOpen={navOpen} />}
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