'use client';

import './style.css';

export default function CorrectStatus(admData: any) {
    return (
        <div className='adm_content_container'>
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
    )
};