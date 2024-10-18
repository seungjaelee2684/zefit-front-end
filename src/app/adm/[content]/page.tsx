'use client';

import './style.css';
import '../style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';
import AdmHeader from '@/components/common/AdmHeader';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/Supabase';
import { useParams } from 'next/navigation';
import { contentConfig } from '@/data/contentConfig';
import AdmScrollTop from '@/components/page/AdminPage/AdmScrollTop';

export default function AdmHistory() {

    const { content } = useParams() as { content: string };

    const [admData, setAdmData] = useState<any>(null);
    console.log(admData);

    const config = contentConfig[content] || { title: '관리자메인' };
    const Component = config.component;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from(content)
                    .select('*');
                if (error) {
                    throw error;
                }
                setAdmData(data);
            } catch (error) {
                console.error("Error fetching data from Supabase:", error);
            };
        };

        if (content) {
            fetchData();
        };
    }, [content]);

    return (
        <article className='adm_layout'>
            <MetaTagTitle title={`관리자모드: ${config.title}`} />
            <AdmHeader title={config.title} />
            <section className='adm_content_wrapper'>
            {Component && <Component admData={admData} />}
            </section>
            <AdmScrollTop />
                <button className='add_button_wrapper'>
                    <i className='icon-cloud-upload'></i>
                    추가하기
                </button>
        </article>
    )
};