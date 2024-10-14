'use client';

import './style.css';
import '../MainHeader/style.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageHeader() {

    const path = usePathname();

    const [position, setPosition] = useState<number>(0);

    const handleScroll = (e: any) => {
        const scrolly = window.scrollY;
        setPosition(scrolly);
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            style={{
                height: (position > 0) ? '60px' : '',
                color: (position > 0) ? '#333333' : '',
                backgroundColor: (position > 0) ? 'white' : '',
                boxShadow: (position > 0) ? '0 0 10px rgba(0, 0, 0, 0.1)' : ''
            }}
            className='page_header_container'>
            <nav className="main_header_navlist">
                <div className='logo_box'>
                    <a href='/'>
                        <img
                            style={{
                                width: (position > 0) ? '75px' : '126px'
                            }}
                            className='logo'
                            title='zefit logo'
                            src='http://www.zefit.co.kr/theme/basic/assets/images/logo.png'
                            alt='로고 이미지' />
                    </a>
                </div>
                <ul className='nav_button_wrapper'>
                    <li className='nav_button_box'>
                        <a className='page_header_nav_button'>
                            회사소개
                        </a>
                    </li>
                    <li className='nav_button_box'>
                        <a className='page_header_nav_button'>
                            사업소개
                        </a>
                    </li>
                    <li className='nav_button_box'>
                        <a className='page_header_nav_button'>
                            커뮤니티
                        </a>
                    </li>
                </ul>
                <ul className='translate_button_wrapper'>
                    <li className='translate_button_box'>
                        <a
                            style={{
                                fontWeight: (path?.includes('/en')) ? '800' : '400',
                                color: (path?.includes('/en')) ? '#0190D6' : '#333333',
                                borderBottom: (path?.includes('/en')) ? '2px solid' : '2px solid #ffffff00'
                            }}
                            href={`${(path?.includes('/en')) ? path : `/en${path}`}`}
                            className='translate_button'>
                            ENG
                        </a>
                    </li>
                    <li className='translate_button_box'>
                        <a
                            style={{
                                fontWeight: (!path?.includes('/en')) ? '800' : '400',
                                color: (!path?.includes('/en')) ? '#0190D6' : '#333333',
                                borderBottom: (!path?.includes('/en')) ? '2px solid' : '2px solid #ffffff00'
                            }}
                            href={`${(path === '/en') ? '/' : path?.split('/en').join('')}`}
                            className='translate_button'>
                            KOR
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};