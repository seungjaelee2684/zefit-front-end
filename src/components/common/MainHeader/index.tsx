'use client';

import { useEffect, useState } from 'react';
import './style.css';
import { usePathname } from 'next/navigation';

export default function MainHeader() {

    const path = usePathname();

    const [position, setPosition] = useState<number>(0);

    const handleScroll = (e: any) => {
        const scrolly = window.scrollY;
        setPosition(scrolly);
    };

    const handleEnglishTransColor = () => {
        if (position > 0) {
            if (path?.includes('/en')) {
                return '#0190D6';
            } else {
                return '#333333';
            }
        } else {
            if (path?.includes('/en')) {
                return '#ffffff';
            } else {
                return '#cecece';
            }
        }
    };

    const handleKoreanTransColor = () => {
        if (position > 0) {
            if (!path?.includes('/en')) {
                return '#0190D6';
            } else {
                return '#333333';
            }
        } else {
            if (!path?.includes('/en')) {
                return '#ffffff';
            } else {
                return '#cecece';
            }
        }
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
                <div className='logo_box'>
                    <a href={(path?.includes('/en')) ? '/en' : '/'}>
                        <img
                            style={{
                                width: (position > 0) ? '75px' : '126px'
                            }}
                            className='logo'
                            title='zefit logo'
                            src={(position > 0)
                                ? 'http://www.zefit.co.kr/theme/basic/assets/images/logo.png'
                                : 'http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png'}
                            alt='로고 이미지' />
                    </a>
                </div>
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
                        <a
                            style={{
                                fontWeight: (path?.includes('/en')) ? '800' : '400',
                                color: handleEnglishTransColor(),
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
                                color: handleKoreanTransColor(),
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