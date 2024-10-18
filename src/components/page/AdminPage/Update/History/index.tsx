'use client';

import { useState } from 'react';
import './style.css';
import { supabase } from '@/utils/Supabase';

export default function CorrectHistory(admData: any) {

    const id = admData.admData?.id
    const date = admData.admData?.created_at;
    const contentKR = admData.admData?.content_kr;
    const contentEN = admData.admData?.content_en;

    const [historyInput, setHistoryInput] = useState<any>({
        created_at: date,
        content_kr: contentKR,
        content_en: contentEN
    });
    const { created_at, content_kr, content_en } = historyInput;

    console.log(id);

    const onChangeInputHandler = (e: any) => {
        const { name, value } = e.target;
        setHistoryInput({
            ...historyInput,
            [name]: value
        });
    };

    const onClickRemoveHandler = (e: any) => {
        e.preventDefault();

        // admData가 존재하는지 미리 체크
        if (!admData || !admData.admData.id) {
            console.error("admData or admData.id is missing.");
            return;
        }

        const fetchRemove = async () => {
            try {
                const { error } = await supabase
                    .from('historys')
                    .delete()
                    .eq('id', id);
                    
                    if (error) throw error;

                window.location.pathname = '/adm/historys';
            } catch (error) {
                console.error("Error fetching paginated data from Supabase:", error);
            }
        };

        fetchRemove();
    };

    return (
        <table className='input_table_container'>
            <tbody className='input_table_body'>
                <tr style={{ height: '80px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        날짜
                    </th>
                    <td className='input_table_body_room'>
                        <input
                            className='table_input'
                            type='text'
                            name='created_at'
                            defaultValue={date}
                            value={created_at}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ height: '200px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        내용
                    </th>
                    <td className='input_table_body_room'>
                        <textarea
                            className='table_input'
                            name='content_kr'
                            defaultValue={contentKR}
                            value={content_kr}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ height: '200px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        내용(영문)
                    </th>
                    <td className='input_table_body_room'>
                        <textarea
                            className='table_input'
                            name='content_en'
                            defaultValue={contentEN}
                            value={content_en}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr className='update_button_container'>
                    <button className='update_button'>
                        수정 완료
                    </button>
                    <button
                        onClick={onClickRemoveHandler}
                        className='update_button'>
                        삭제
                    </button>
                    <a href='/adm/historys' className='update_button'>
                        전체 목록
                    </a>
                </tr>
            </tbody>
        </table>
    )
};