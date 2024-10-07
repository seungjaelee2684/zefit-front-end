'use client';

import PageHeader from '@/components/common/PageHeader';
import './style.css';
import PageBanner from '@/components/common/PageBanner';
import PageTap from '@/components/common/PageTap';
import { useEffect, useState } from 'react';

export default function History() {

    const [historyData, setHistoryData] = useState<any[]>([]);
    console.log("🚀 ~ History ~ historyData:", historyData);

    useEffect(() => {
        fetch('/api/inquiry/history')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setHistoryData(jsonData))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='연혁' />
            <PageTap />
            <div className='page_layout'>
                <section className='history_page_container'>
                    <div className='history_page_title_container'>
                        <h2 className='history_page_title'>
                            History
                        </h2>
                        <h3 className='history_page_sub_title'>
                            {'많은 사람들의 건강한 삶으로 행복한 사회를 만들기 위해\n혁신적인 발전을 이루는 노력의 길'}
                        </h3>
                    </div>
                    <ul className='history_wrapper'>
                        <div className='timeline_connected_line' />
                        {historyData?.map((item: any, index: number) =>
                            <li
                                key={index}
                                className='timeline_lane_container'>
                                <div
                                    style={{
                                        fontWeight: (index === 0) ? '800' : '600'
                                    }}
                                    className='timeline_year'>
                                    {item?.year}
                                </div>
                                <div
                                    className='timeline_point'
                                    style={{
                                        backgroundColor: (index === 0) ? '#00AEEF' : '#ffffff',
                                        marginLeft: (index === 0) ? '-3px' : '0px'
                                    }} />
                                <ul className='timeline_month_list'>
                                    {item?.content.map((mon: any, idx: number) =>
                                        <li
                                            key={idx}
                                            className='timeline_month_lane'>
                                            <strong className='timeline_month'>
                                                {mon.month}
                                            </strong>
                                            <p className='timeline_month_content'>
                                                {mon.workKR}
                                            </p>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </article>
    )
};