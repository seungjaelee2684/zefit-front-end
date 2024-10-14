'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import './style.css';
import { useEffect, useState } from "react";
import MetaTagTitle from "@/utils/MetaTagTitle";

export default function Status() {

    const [partner, setPartner] = useState<any[]>([]);
    const [certification, setCertification] = useState<any[]>([]);
    console.log("🚀 ~ Status ~ certification:", certification);

    useEffect(() => {
        fetch('/api/inquiry/partner')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setPartner(jsonData))
            .catch((error) => console.error("Fetch error:", error));
        fetch('/api/inquiry/certification')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setCertification(jsonData))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    return (
        <article>
            <MetaTagTitle title='인증 및 파트너 현황' />
            <PageHeader />
            <PageBanner pageTitle='인증 및 파트너 현황' />
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
                                        src={item?.src}
                                        alt={item?.title} />
                                </a>
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </article>
    )
};