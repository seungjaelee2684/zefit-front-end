'use client';

import { useEffect, useRef, useState } from "react"

export default function Header() {

    const headerRef = useRef<HTMLHeadElement>(null);
    const [isKorean, setIsKorean] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png');

    useEffect(() => {
        const scrollEvent = (e: any) => {
            if (!headerRef.current) return;
            const scrolly = window.scrollY;

            if (scrolly !== 0) {
                headerRef.current.style.height = '60px';
                headerRef.current.style.backgroundColor = '#FFFFFF';
                headerRef.current.style.color = '#444444';

                setUrl('http://www.zefit.co.kr/theme/basic/assets/images/logo.png');
            } else {
                headerRef.current.style.height = '100px';
                headerRef.current.style.backgroundColor = 'transparent';
                headerRef.current.style.color = '#FFFFFF';

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
            <nav className="web:w-[1170px] w-[96%] h-[100%] flex items-center justify-between">
                <a className="w-auto h-[100%] flex items-center justify-center cursor-pointer" href="/">
                    <img src={url} />
                </a>
                <ul className="w-[30%] h-[100%] flex justify-between items-center text-[16px] font-medium text-shadow-sm">
                    <li className="h-[100%] flex justify-center items-center">
                        <a className="cursor-pointer" href="/content/company">
                            회사소개
                        </a>
                    </li>
                    <li className="h-[100%] flex justify-center items-center">
                        <a className="cursor-pointer" href="/content/zebrafish">
                            사업소개
                        </a>
                    </li>
                    <li className="h-[100%] flex justify-center items-center">
                        <a className="cursor-pointer" href="/notice">
                            커뮤니티
                        </a>
                    </li>
                </ul>
                <ul className="w-[17%] h-[100%] flex justify-between items-center text-[16px] font-semibold">
                    <li className="h-[100%] flex justify-center items-center gap-3">
                        <button
                            onClick={() => setIsKorean(false)}
                            className={(!isKorean)
                                ? "font-bold bg-transparent outline-none text-[14px] cursor-pointer w-[30px] border-b-2"
                                : "font-light bg-transparent border-none outline-none text-[14px] cursor-pointer w-[30px]"}>
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