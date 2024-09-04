'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function Map() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>오시는 길</PageBanner>
                <div className="w-[94%] web:w-[1170px] flex justify-center items-center gap-4">
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                        <h2 className="text-[32px] font-bold">오시는 길</h2>
                        <div>사무실 주소</div>
                        <div>연구실 주소</div>
                        <div>전화번호</div>
                        <div>교통편</div>
                    </div>
                    <div className="min-w-[700px] h-[500px] bg-gray-300"></div>
                </div>
            </article>
        </main>
    )
};