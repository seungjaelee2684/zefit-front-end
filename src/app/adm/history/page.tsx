'use client';

import './style.css';
import '../style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';
import AdmHeader from '@/components/common/AdmHeader';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/Superbase';

export default function AdmHistory() {

    const [admHistory, setAdmHistory] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('historys')
                    .select('*');
                if (error) {
                    throw error;
                }
                setAdmHistory(data);
            } catch (error) {
                console.error("Error fetching data from Supabase:", error);
            };
        };
    }, []);

    return (
        <article className='adm_layout'>
            <MetaTagTitle title='관리자모드: 연혁' />
            <AdmHeader />
            <section className='adm_content_wrapper'>
                <div className='adm_content_container'>
                    <h2 className='adm_content_part_title'>
                        문의한 글
                    </h2>
                    <table className='adm_table_container'>
                        <thead className='adm_table_header_container'>
                            <tr>
                                <th style={{ minWidth: '100px' }} className='table_header_text'>
                                    년도
                                </th>
                                <th style={{ width: '100%' }} className='table_header_text'>
                                    내용
                                </th>
                                <th style={{ minWidth: '120px' }} className='table_header_text'>
                                    작성자
                                </th>
                                <th style={{ minWidth: '120px' }} className='table_header_text'>
                                    날짜
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table_body_container'>
                            <tr className='table_body_lane'>
                                <td style={{ minWidth: '100px' }} className='table_body'>
                                    test
                                </td>
                                <td style={{ width: '100%' }} className='table_body_content_room'>
                                    test
                                </td>
                                <td style={{ minWidth: '120px' }} className='table_body'>
                                    test
                                </td>
                                <td style={{ minWidth: '120px' }} className='table_body'>
                                    test
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </article>
    )
};