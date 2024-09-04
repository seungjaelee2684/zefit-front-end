'use client';

import { businessNavList } from "@/data/navData";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface PageTapProps {
    value: number;
};

export default function PageTap({ value }: PageTapProps) {

    const pathname = usePathname();

    const tapRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<number>(window.scrollY);

    useEffect(() => {
        const scrollEvent = () => {
            if (!tapRef.current) return;

            const scrolly = window.scrollY;
            setScroll(scrolly);

            if (scrolly >= 380) {
                tapRef.current.style.position = 'fixed';
            } else {
                tapRef.current.style.position = 'static';
            };
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        }
    }, []);

    return (
        <section ref={tapRef} className="w-full top-[60px] left-0 z-[19] bg-white flex justify-center items-center">
            <ul className="w-[94%] web:w-[1170px] flex items-center h-[70px]">
                {businessNavList[value].list?.map((item: any, index: number) =>
                    <li key={index} className="w-full h-full">
                        {(pathname === item.href)
                            ? <a
                                href={item.href}
                                className="w-full h-full text-[18px] font-semibold border
                                            bg-zefit-hover text-white border-zefit-hover flex justify-center items-center">
                                {item.id}
                            </a>
                            : <a
                                href={item.href}
                                className="w-full h-full text-[18px] font-semibold border
                                            hover:bg-zefit-hover hover:text-white hover:border-zefit-hover active:bg-zefit-heavy flex justify-center items-center">
                                {item.id}
                            </a>}
                    </li>
                )}
            </ul>
        </section>
    )
};