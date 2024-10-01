'use client';

import MainHeader from "@/components/common/MainHeader";
import PageBanner from "@/components/common/PageBanner";
import PageTap from "@/components/common/PageTap";

export default function Company() {
    return (
        <article>

            {/* 페이지 헤더 */}
            <MainHeader />

            {/* 페이지 배너 */}
            <PageBanner pageTitle='회사개요' />

            {/* 회사 개요 페이지 레이아웃 */}
            <div className='company_layout'>
                <PageTap />
            </div>
        </article>
    )
};