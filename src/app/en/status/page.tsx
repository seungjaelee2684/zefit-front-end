'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import '../../status/style.css';
import { useEffect, useState } from "react";
import MetaTagTitle from "@/utils/MetaTagTitle";
import { supabase } from "@/utils/Supabase";

export default function Status() {

    const [partner, setPartner] = useState<any[]>([]);
    const [certification, setCertification] = useState<any[]>([]);
    console.log("🚀 ~ Status ~ partner:", partner);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('partners')
                    .select('*')
                    .eq('state', 'partner');
                if (error) {
                    throw error;
                }
                setPartner(data);
            } catch (error) {
                console.error("Error fetching paginated data from Supabase:", error);
            }
        };

        fetch('/api/inquiry/certification')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setCertification(jsonData))
            .catch((error) => console.error("Fetch error:", error));

        fetchData();
    }, []);

    return (
        <article>
            <MetaTagTitle title='Certifications & Partners' ko={false} />
            <PageHeader />
            <PageBanner pageTitle='Certifications & Partners' />
            <PageTap tap='company' />
            <div className='page_layout'>
                <section className='status_page_container'>
                    <h2 className='status_page_title_wrapper'>
                        Certification
                    </h2>
                    <ul className='status_page_content_list'>
                        {certification?.map((item: any, index: number) =>
                            <li
                                key={index}>
                                <a className='status_image_wrapper'>
                                    <img
                                        className='status_image'
                                        src={item?.src}
                                        alt={item?.title} />
                                </a>
                            </li>
                        )}
                    </ul>
                    <h2
                        style={{ marginTop: '40px' }}
                        className='status_page_title_wrapper'>
                        Partner
                    </h2>
                    <ul className='status_page_content_list'>
                        {partner?.map((item: any, index: number) =>
                            <li
                                key={index}>
                                <a className='status_image_wrapper'>
                                    <img
                                        className='status_image'
                                        src={item?.image}
                                        alt={item?.title_kr} />
                                </a>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </article>
    )
};