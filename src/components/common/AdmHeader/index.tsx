'use client';

import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useRecoilState } from 'recoil';
import { admNavModalOpen } from '@/modules/navModal';

interface AdmHeaderProps {
    title: string;
};

export default function AdmHeader({ title }: AdmHeaderProps) {

    const tapRef = useRef<HTMLUListElement>(null);
    const [openTap, setOpenTap] = useRecoilState(admNavModalOpen);

    const onClickOpenTapHandler = () => {
        setOpenTap(!openTap);
    };

    useEffect(() => {
        if (!tapRef.current) return;

        if (openTap) {
            tapRef.current.style.display = 'flex';

            setTimeout(() => {
                if (!tapRef.current) return;
                tapRef.current.style.height = '152px';
            }, 20);
        } else {
            tapRef.current.style.height = '0px';

            setTimeout(() => {
                if (!tapRef.current) return;
                tapRef.current.style.display = 'none';
            }, 300);
        };
    }, [openTap]);

    return (
        <header className='adm_header'>
            <div className='adm_header_top_container'>
                <div className='adm_header_logo_container'>
                    <a
                        href='/adm'
                        className='adm_header_logo_adm_link'>
                        <span className='adm_header_logo'>
                            <i className='fa-solid fa-cloud'></i>
                            CLOUD ADMIN
                        </span>
                    </a>
                </div>
                <nav className='adm_header_nav_container'>
                    <ul className='adm_header_nav_list'>
                        <li>
                            <button className='adm_header_menu_button'>
                                <span className='icon-menu'></span>
                            </button>
                        </li>
                        <div className='adm_header_right_wrapper'>
                            <li>
                                <a
                                    href='/'
                                    className='adm_header_home_button'>
                                    <span className='icon-home'></span>
                                </a>
                            </li>
                            <li>
                                <button className='adm_header_profile_button'>
                                    <img
                                        className='adm_profile_img'
                                        src='http://www.zefit.co.kr/theme/basic/img/no_profile.gif'
                                        alt='프로필 이미지' />
                                </button>
                            </li>
                        </div>
                    </ul>

                </nav>
            </div>
            <div className='adm_header_bottom_container'>
                <div className='adm_header_side_title_box'>
                    navigation
                </div>
                <h1 className='adm_header_page_title'>
                    {title}
                </h1>
            </div>
            <ul className='adm_side_tap_container'>
                <li
                    onClick={onClickOpenTapHandler}
                    className='adm_side_tap_lane'>
                    <span className='adm_side_tap_lane_content_wrap'>
                        <i className='icon-note'></i>
                        게시글관리
                    </span>
                    <span className='adm_side_tap_count'>
                        4
                    </span>
                </li>
                <ul ref={tapRef} className='adm_side_tap_nav'>
                    <li className='adm_side_tap_nav_button'>
                        <a
                            href='/adm/historys'
                            className='adm_side_tap_nav_button_text'>
                            연혁
                        </a>
                    </li>
                    <li className='adm_side_tap_nav_button'>
                        <a
                            href='/adm/partners'
                            className='adm_side_tap_nav_button_text'>
                            인증 및 파트너 현황
                        </a>
                    </li>
                    <li className='adm_side_tap_nav_button'>
                        <a
                            href='/adm/notices'
                            className='adm_side_tap_nav_button_text'>
                            공지사항
                        </a>
                    </li>
                    <li className='adm_side_tap_nav_button'>
                        <a
                            href='/adm/news'
                            className='adm_side_tap_nav_button_text'>
                            보도자료
                        </a>
                    </li>
                </ul>
                <li style={{ width: '100%' }}>
                    <a
                        href='/adm/inquirys'
                        className='adm_side_tap_lane'>
                        <span className='adm_side_tap_lane_content_wrap'>
                            <i className='icon-envelope-open'></i>
                            문의글관리
                        </span>
                    </a>
                </li>
            </ul>
        </header>
    )
};