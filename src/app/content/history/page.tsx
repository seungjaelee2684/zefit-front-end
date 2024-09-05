'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function History() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>연혁</PageBanner>
                <section className="w-[94%] web:w-[1170px] flex flex-col justify-start items-center gap-12">
                    <h2 className="text-[18px] text-zefit-heavy">History</h2>
                    <ul className="w-full flex flex-col justify-center items-center">
                        <li className="w-full h-fit flex justify-center items-start gap-8">
                            <strong className="w-[100px] text-[42px] text-zefit-normal font-semibold">2018</strong>
                            <div className="w-[20px] h-fit grid justify-start items-center pt-6">
                                <div className="w-[14px] min-h-[14px] border-2 border-zefit-normal rounded-full"></div>
                                <div className="w-[2px] h-[400px] bg-zefit-normal"></div>
                            </div>
                            <ul className="w-[300px] flex flex-col justify-start items-start gap-4 pb-10">
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                            </ul>
                        </li>
                        <li className="w-full h-fit flex justify-center items-start gap-8">
                            <strong className="w-[100px] text-[32px] text-zefit-normal font-semibold">2019</strong>
                            <div className="h-fit flex flex-col justify-start items-center pt-4">
                                <div className="w-[12px] min-h-[12px] border-2 border-zefit-normal rounded-full"></div>
                                <div className="w-[2px] flex-grow bg-zefit-normal"></div>
                            </div>
                            <ul className="w-[300px] flex flex-col justify-start items-start gap-4 pb-10">
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                            </ul>
                        </li>
                        <li className="w-full h-fit flex justify-center items-start gap-8">
                            <strong className="w-[100px] text-[32px] text-zefit-normal font-semibold">2020</strong>
                            <div className="h-fit flex flex-col justify-start items-center pt-4">
                                <div className="w-[12px] min-h-[12px] border-2 border-zefit-normal rounded-full"></div>
                                <div className="w-[2px] flex-grow bg-zefit-normal"></div>
                            </div>
                            <ul className="w-[300px] flex flex-col justify-start items-start gap-4 pb-10">
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                                <li>09 기술보증기금, 2018년 기술혁신형 창업기업 지원사업 선정</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    )
};