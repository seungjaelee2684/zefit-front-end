'use client';

import { usePathname } from 'next/navigation';
import './style.css';
import { businessNavList } from '@/data/navData';
import { useEffect, useRef, useState } from 'react';

interface SideTapProps {
    tap: any;
    content: string;
};

export default function SideTap({ tap, content }: SideTapProps) {

    const viewPort = window.innerHeight;

    const path = usePathname();
    const isEnglish = path?.includes('/en');

    const sideTapRef = useRef<HTMLDivElement>(null);

    const [offset, setOffset] = useState(0);

    const linkControl = (item: string) => {
        if (content === 'development') {
            const find = (isEnglish)
                ? businessNavList[2].list?.find((data: any) => data.en === item)
                : businessNavList[2].list?.find((data: any) => data.id === item);
            const resultKo = find?.href;
            const resultEn = find?.href_en;

            return (isEnglish) ? resultEn : resultKo;
        } else {
            return (isEnglish) ? `/en/content/${content}/${item}` : `/content/${content}/${item}`;
        }
    };

    useEffect(() => {
        const scrollEvent = () => {
            setOffset(window.scrollY);  // 스크롤 속도 조정
        };

        window.addEventListener('scroll', scrollEvent);

        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return (
        // 현재안
        <section
            ref={sideTapRef}
            style={{
                position: 'absolute',
                top: `${(viewPort - 360) + offset}px`,
                transition: 'top 0.2s ease-out',
            }}
            className='service_side_tap_container'>
            <ul className='side_tap_list_wrapper'>
                {tap?.map((item: string, index: number) =>
                    <li key={index}>
                        <a
                            href={linkControl(item)}
                            className='side_tap_lane_wrapper'>
                            <p
                                className={(path === linkControl(item)) ? 'select_side_tap_text' : 'side_tap_text'}>
                                {item}
                            </p>
                            <div className='side_tap_right_bar_wrapper'>
                                <div className={(path === linkControl(item)) ? 'select_side_tap_right_bar' : 'side_tap_right_bar'} />
                            </div>
                        </a>
                    </li>
                )}
            </ul>
        </section>

        // 반영안
        // <section className='service_side_tap_wrapper'>
        //     <ul className='service_side_tap_list'>
        //         {tap?.map((item: any, index: number) =>
        //             <li key={index}>
        //                 <a
        //                     href={linkControl(item)}
        //                     className={
        //                         (path === linkControl(item))
        //                             ? 'select_side_tap_button'
        //                             : 'service_side_tap_button'}>
        //                     {item}
        //                 </a>
        //             </li>
        //         )}
        //     </ul>
        // </section>
    )
};