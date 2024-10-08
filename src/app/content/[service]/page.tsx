'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import './style.css';

export default function Service() {
    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='' />
            <PageTap tap='business' />
            <div className='page_layout'>
                <section className='service_page_container'>

                </section>
            </div>
        </article>
    )
};