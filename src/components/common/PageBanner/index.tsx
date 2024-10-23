'use client';

import { usePathname } from 'next/navigation';
import './style.css';

interface PageBannerProps {
    pageTitle: string;
}

export default function PageBanner({ pageTitle }: PageBannerProps) {

    const path = usePathname() as string;

    return (
        <section className='page_top_banner_container'>
            <div className='page_top_banner_text_box'>
                <h1 className='page_top_banner_title'>
                    {pageTitle}
                </h1>
                <p className='page_top_banner_sub_title'>
                    {(path?.includes('/en'))
                        ? 'Endless innovation to realize the greatest happiness for mankind'
                        : '인류 최대 행복 실현을 위한 끊임없는 혁신'}
                </p>
            </div>
        </section>
    )
};