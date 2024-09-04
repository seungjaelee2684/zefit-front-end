'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function Zebrafish() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>제브라피쉬</PageBanner>
                
            </article>
        </main>
    )
};