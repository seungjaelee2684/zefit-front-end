'use client';

import '../../styles/common/main_header.css';
import { usePathname } from 'next/navigation';

export default function MainHeader() {

    return (
        <header className="main_header">
            <nav className="main_header_navlist">
                <a href='/'>
                    <img
                        className='logo'
                        title='zefit logo'
                        src='http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png'
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