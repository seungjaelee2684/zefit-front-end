'use client';

import AdmHeader from '@/components/common/AdmHeader';
import './style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';
import AdmScrollTop from '@/components/page/AdminPage/AdmScrollTop';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Admin() {

    const router = useRouter();

    // 쿠키에서 lastLogin 값을 추출하는 함수
    const getLastLoginFromCookie = () => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'lastLogin') {
                return value;
            }
        }
        return null;
    };

    // lastLogin 값 확인
    const lastLogin = getLastLoginFromCookie();

    if (!lastLogin) {
        // lastLogin 값이 없으면 로그인 페이지로 이동
        alert('로그인이 필요합니다.');
        router.push('/login');
    } else {
        // lastLogin 값이 있으면 시간 확인
        const lastLoginDate = new Date(lastLogin);
        const now = new Date();
        const timeDiff = now.getTime() - lastLoginDate.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);

        if (dayDiff > 1) {
            // 하루가 지났으면 로그인 페이지로 이동
            alert('로그인 시간이 만료되었습니다.\n로그인 페이지로 이동합니다.')
            router.push('/login');
        } else {
            return (
                <article className='adm_layout'>
                    <MetaTagTitle title='관리자모드' />
                    <AdmHeader title='관리자메인' />
                    <section className='adm_content_wrapper'>
                        <ul className='adm_content_box'>
                            <li className='adm_content_part_warpper'>
                                <h2 className='adm_content_part_title'>
                                    관리자 계정에 로그인 된 상태입니다.
                                </h2>
                                <a
                                    href='/adm/historys'
                                    className='adm_content_part_link'>
                                    연혁 보러가기
                                    <i
                                        style={{ fontSize: '10px', marginTop: '3px' }}
                                        className='icon-arrow-right'></i>
                                </a>
                                <a
                                    href='/adm/partners'
                                    className='adm_content_part_link'>
                                    인증 및 파트너 현황 보러가기
                                    <i
                                        style={{ fontSize: '10px', marginTop: '3px' }}
                                        className='icon-arrow-right'></i>
                                </a>
                                <a
                                    href='/adm/notices'
                                    className='adm_content_part_link'>
                                    공지사항 보러가기
                                    <i
                                        style={{ fontSize: '10px', marginTop: '3px' }}
                                        className='icon-arrow-right'></i>
                                </a>
                                <a
                                    href='/adm/news'
                                    className='adm_content_part_link'>
                                    보도자료 보러가기
                                    <i
                                        style={{ fontSize: '10px', marginTop: '3px' }}
                                        className='icon-arrow-right'></i>
                                </a>
                                <a
                                    href='/adm/inquirys'
                                    className='adm_content_part_link'>
                                    문의한 글 보러가기
                                    <i
                                        style={{ fontSize: '10px', marginTop: '3px' }}
                                        className='icon-arrow-right'></i>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <AdmScrollTop />
                </article>
            )
        }
    }
};