'use client';

import { supabase } from '@/utils/Supabase';
import './style.css';

export default function Requests(admData: any) {

    const requestsData = admData.admData;

    const onClickRemoveHandler = (e: any, id: string) => {
        e.preventDefault();

        const fetchRemove = async () => {
            try {
                const { error } = await supabase
                    .from('inquirys')
                    .delete()
                    .eq('id', id);

                if (error) throw error;

                window.location.pathname = '/adm/inquirys';
            } catch (error) {
                console.error("Error fetching paginated data from Supabase:", error);
            }
        };

        fetchRemove();
    };

    return (
        <div className='adm_content_container'>
            <table className='adm_table_container'>
                <thead className='adm_table_header_container'>
                    <tr className='adm_table_header_box'>
                        <th style={{ minWidth: '140px' }} className='table_header_text'>
                            회사
                        </th>
                        <th style={{ minWidth: '100px' }} className='table_header_text'>
                            이름
                        </th>
                        <th style={{ minWidth: '180px' }} className='table_header_text'>
                            이메일
                        </th>
                        <th style={{ width: '100%' }} className='table_header_text'>
                            제목
                        </th>
                        <th style={{ width: '100%' }} className='table_header_text'>
                            내용
                        </th>
                        <th style={{ minWidth: '100px' }} className='table_header_text'>
                            날짜
                        </th>
                        <th style={{ minWidth: '100px' }} className='table_header_text'>
                            관리
                        </th>
                    </tr>
                </thead>
                <tbody className='table_body_container'>
                    {requestsData?.map((item: any, index: number) =>
                        <tr
                            key={index}
                            className='notice_table_body_lane'>
                            <td style={{ minWidth: '140px' }} className='table_body'>
                                {item?.company}
                            </td>
                            <td style={{ minWidth: '100px' }} className='table_body'>
                                {item?.name}
                            </td>
                            <td style={{ minWidth: '180px' }} className='table_body'>
                                {item?.email}
                            </td>
                            <td className='notice_table_body_content_room'>
                                <span className='notice_table_body_content_room_span'>
                                    {item?.title}
                                </span>
                            </td>
                            <td className='notice_table_body_content_room'>
                                <span className='notice_table_body_content_room_span'>
                                    {item?.content}
                                </span>
                            </td>
                            <td style={{ minWidth: '100px' }} className='table_body'>
                                {item?.created_at}
                            </td>
                            <td style={{ minWidth: '100px' }} className='table_body'>
                                <a className='table_icon_box'>
                                    <i className='icon-trash'></i>
                                </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};