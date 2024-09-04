'use client';

import CenterContent from "@/components/common/CenterContent";
import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function Company() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>회사개요</PageBanner>
                <CenterContent title1="About us" title2="Mission" />
            </article>
        </main>
    )
};