'use client';

import { useEffect, useState } from 'react';
import { CorrectProps } from '../History';
import './style.css';
import { supabase } from '@/utils/Supabase';

export default function CorrectNotice({ admData, isUpload, setIsUpload }: CorrectProps) {

    const id = admData?.id;

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [inputImg, setInputImg] = useState<any>(null);
    const [noticeInput, setNoticeInput] = useState<any>({
        isSpecial: false,
        title_kr: '',
        title_en: '',
        content_kr: '',
        content_en: '',
        writer_kr: '',
        writer_en: ''
    });
    const { isSpecial, title_kr, title_en, content_kr, content_en, writer_kr, writer_en } = noticeInput;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setInputImg(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    console.log(admData, isUpload);

    const onChangeInputHandler = (e: any) => {
        const { name, value } = e.target;
        setNoticeInput({
            ...noticeInput,
            [name]: value
        });
    };

    const onClickRemoveHandler = (e: any) => {
        e.preventDefault();

        // admData가 존재하는지 미리 체크
        if (!admData || !admData?.id) {
            console.error("admData or admData.id is missing.");
            return;
        }

        const fetchRemove = async () => {
            try {
                const { error } = await supabase
                    .from('notices')
                    .delete()
                    .eq('id', id);

                if (error) throw error;

                window.location.pathname = '/adm/notices';
            } catch (error) {
                console.error("Error fetching paginated data from Supabase:", error);
            }
        };

        fetchRemove();
    };

    useEffect(() => {
        if (admData) {
            setPreviewUrl(isUpload ? null : admData?.image);
            setNoticeInput({
                isSpecial: isUpload ? false :admData?.is_special,
                title_kr: isUpload ? '' : admData?.title_kr,
                title_en: isUpload ? '' : admData?.title_en,
                content_kr: isUpload ? '' : admData?.content_kr,
                content_en: isUpload ? '' : admData?.content_en,
                writer_kr: isUpload ? '' : admData?.writer_kr,
                writer_en: isUpload ? '' : admData?.writer_en
            });
        }
    }, [admData, isUpload]);

    return (
        <table className='input_table_container'>
            <tbody className='input_table_body'>
                <tr style={{ height: '200px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        이미지
                    </th>
                    <td className='input_table_body_room'>
                        <div className="image_container">
                            <input
                                style={{ display: 'none' }}
                                type='file'
                                id='files'
                                name='inputImg'
                                onChange={handleImageChange} />    
                            {(previewUrl)
                                ? <div className="image_preview_overlay">
                                    <img src={previewUrl} alt="Preview" className="image_preview" />
                                </div>
                                : <label htmlFor='files' className='image_input'>
                                    <i className='icon-picture' />
                                    <div className='image_input_button'>
                                        이미지 업로드
                                    </div>
                                </label>}
                            {(previewUrl)
                                && <button
                                    onClick={() => setPreviewUrl(null)}
                                    className='image_delete_button'>
                                    <i className='icon-close' />
                                </button>}
                        </div>
                    </td>
                </tr>
                <tr style={{ height: '100px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        분류
                    </th>
                    <td className='input_table_body_room'>
                        <span
                            style={{
                                color: (isSpecial) ? '#333333' : '#757575',
                                fontWeight: (isSpecial) ? '700' : '400'
                            }}
                            onClick={() => setNoticeInput({ ...noticeInput, isSpecial: true })}
                            className='radio_button_wrapper'>
                            <div className='radio_button_select'>
                                {(isSpecial) && <div className='radio_button_point' />}
                            </div>
                            중요
                        </span>
                        <span
                            style={{
                                color: (!isSpecial) ? '#333333' : '#757575',
                                fontWeight: (!isSpecial) ? '700' : '400'
                            }}
                            onClick={() => setNoticeInput({ ...noticeInput, isSpecial: false })}
                            className='radio_button_wrapper'>
                            <div className='radio_button_select'>
                                {(!isSpecial) && <div className='radio_button_point' />}
                            </div>
                            일반
                        </span>
                    </td>
                </tr>
                <tr style={{ height: '100px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        작성자
                    </th>
                    <td className='input_table_body_room'>
                        <input
                            className='table_input'
                            name='writer_kr'
                            value={writer_kr}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ height: '100px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        작성자(영문)
                    </th>
                    <td className='input_table_body_room'>
                        <input
                            className='table_input'
                            name='writer_en'
                            value={writer_en}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ height: '100px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        제목
                    </th>
                    <td className='input_table_body_room'>
                        <input
                            className='table_input'
                            name='title_kr'
                            value={title_kr}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ height: '100px' }} className='input_table_body_lane'>
                    <th className='input_table_body_head'>
                        제목(영문)
                    </th>
                    <td className='input_table_body_room'>
                        <input
                            className='table_input'
                            name='title_en'
                            value={title_en}
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
                            value={content_en}
                            onChange={onChangeInputHandler} />
                    </td>
                </tr>
                <tr style={{ width: '100%' }}>
                    <td className='update_button_container'>
                        <button className='update_button'>
                            {(isUpload) ? '추가하기' : '수정 완료'}
                        </button>
                        {(!isUpload)
                            && <button
                                onClick={onClickRemoveHandler}
                                className='update_button'>
                                삭제
                            </button>}
                        {(!isUpload)
                            && <a
                                href='/adm/partners/update'
                                className='update_button'>
                                추가하기
                            </a>}
                        <a href='/adm/partners' className='update_button'>
                            전체 목록
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};