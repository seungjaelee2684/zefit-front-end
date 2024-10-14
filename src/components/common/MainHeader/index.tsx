'use client';

import { useEffect, useState } from 'react';
import './style.css';

export default function MainHeader() {

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
            className="main_header">
            <nav className="main_header_navlist">
                <a href='/'>
                    <img
                        className='logo'
                        title='zefit logo'
                        src={(position > 0)
                                ? 'http://www.zefit.co.kr/theme/basic/assets/images/logo.png'
                                : 'http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png'}
                        alt='로고 이미지' />
                </a>
                <ul className='nav_button_wrapper'>
                    <li className='nav_button_box'>
                        <a className='nav_button'>
                            회사소개
                        </a>
                    </li>
                    <li className='nav_button_box'>
                        <a className='nav_button'>
                            사업소개
                        </a>
                    </li>
                    <li className='nav_button_box'>
                        <a className='nav_button'>
                            커뮤니티
                        </a>
                    </li>
                </ul>
                <ul className='translate_button_wrapper'>
                    <li className='translate_button_box'>
                        <a href='en' className='translate_button'>
                            ENG
                        </a>
                    </li>
                    <div className='translate_between_bar' />
                    <li className='translate_button_box'>
                        <a href='/' className='translate_button'>
                            KOR
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};