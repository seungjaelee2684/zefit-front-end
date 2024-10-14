'use client';

import AdmHeader from '@/components/common/AdmHeader';
import './style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';

export default function Admin() {

    const onClickScrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <article className='adm_layout'>
            <MetaTagTitle title='관리자모드' />
            <AdmHeader />
            <section className='adm_content_wrapper'>
                <ul className='adm_content_box'>
                    <li className='adm_content_part_warpper'>
                        <h2 className='adm_content_part_title'>
                            문의한 글
                        </h2>
                        <table className='adm_table_container'>
                            <thead className='adm_table_header_container'>
                                <tr>
                                    <th className='table_header_text'>
                                        내용
                                    </th>
                                    <th className='table_header_text'>
                                        내용
                                    </th>
                                    <th className='table_header_text'>
                                        내용
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='table_body_container'>
                                <tr className='table_body_lane'>
                                    <td className='table_body'>
                                        test
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </section>
            <button
                onClick={onClickScrollTopHandler}
                className='adm_scroll_top_button'>
                <span className='adm_top_arrow'>
                    ▲
                </span>
                top
            </button>
        </article>
    )
};