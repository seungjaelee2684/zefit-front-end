'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import '../../service/[service]/style.css';
import './style.css';
import { useState } from "react";
import { businessNavList } from "@/data/navData";
import SideTap from "@/components/common/SideTap";

export default function OpenInnovation() {

    const developmentData = businessNavList[2].list?.map((item: any) => item.id);

    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='신약개발' />
            <PageTap tap='business' />
            <SideTap tap={developmentData} content='development' />
            <div className='page_layout'>
                <section className='open_Innovation_page_container'>
                    <h2 className='service_page_title'>
                        <div className='service_page_side_bar' />
                        오픈 이노베이션
                    </h2>
                </section>
            </div>
        </article>
    )
};