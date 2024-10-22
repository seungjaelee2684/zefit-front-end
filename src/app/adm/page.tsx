'use client';

import AdmHeader from '@/components/common/AdmHeader';
import './style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';
import AdmScrollTop from '@/components/page/AdminPage/AdmScrollTop';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/Supabase';

export default function Admin() {

    const router = useRouter();

    const [resultData, setResultData] = useState<any>({
        history: null,
        partner: null,
        notice: null,
        news: null,
        inquiry: null
    });
    const { history,  } = resultData;
    console.log(resultData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [historys, partners] = await Promise.all([
                    supabase.from('historys').select('*').order('created_at', { ascending: true }).range(0, 2),
                    supabase.from('partners').select('*').order('created_at', { ascending: true }).range(0, 2)
                ])
                if (historys.error) {
                    throw historys.error;
                }
                setResultData({
                    ...resultData,
                    history: historys.data[0],
                    partners: partners.data
                });
            } catch (error) {
                console.error("Error fetching data from Supabase:", error);
            };
        };
        fetchData()
    }, []);

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
                        {/* <ul className='adm_content_box'>
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
                        </ul> */}
                        {/* <ul className='adm_content_box'>
                            <li style={{ width: '100%' }}>
                                <table className='adm_table_container'>
                                    <thead className='adm_table_header_container'>
                                        <tr className='adm_table_header_box'>
                                            <th className='small_table_header'>
                                                날짜
                                            </th>
                                            <th style={{ width: '100%' }} className='table_header_text'>
                                                내용
                                            </th>
                                            <th style={{ width: '100%' }} className='table_header_text'>
                                                내용(영문)
                                            </th>
                                            <th className='small_table_header'>
                                                날짜
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='table_body_container'>
                                        {resultData?.map((item: any, index: number) =>
                                            <tr
                                                key={index}
                                                className='table_body_lane'>
                                                <td className='small_table_body'>
                                                    {item?.created_at.slice(0, 4)}년
                                                </td>
                                                <td className='table_body_content_room'>
                                                    <span className='table_body_content_room_span'>
                                                        {item?.content_kr}
                                                    </span>
                                                </td>
                                                <td className='table_body_content_room'>
                                                    <span className='table_body_content_room_span'>
                                                        {item?.content_en}
                                                    </span>
                                                </td>
                                                <td className='small_table_body'>
                                                    {item?.created_at}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </li>
                        </ul> */}
                    </section>
                    <AdmScrollTop />
                </article>
            )
        }
    }
};