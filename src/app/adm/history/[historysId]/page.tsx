'use client'

import './style.css';
import '../../style.css';

import AdmHeader from "@/components/common/AdmHeader";
import MetaTagTitle from "@/utils/MetaTagTitle";

export default function AdmHistoryDetail() {
    return (
        <article className='adm_layout'>
            <MetaTagTitle title='관리자 모드: 연혁' />
            <AdmHeader />
            <section className='adm_content_wrapper'>
                <table className='input_table_container'>
                    <tbody className='input_table_body'>
                        <tr style={{ height: '100px' }} className='input_table_body_lane'>
                            <th className='input_table_body_head'>
                                년도
                            </th>
                            <td className='input_table_body_room'>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    )
};