'use client';

import ContactButton from "@/components/common/ContactButton";
import PartnerList from "@/components/common/PartnerList";
import HomeHeader from "@/components/common/HomeHeader";
import Contact from "@/components/LandingPage/Contact";

export default function Home() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between">
            <HomeHeader />
            <article className="w-full flex min-h-screen flex-col items-center justify-between gap-24">
                <section className="w-full h-dvh relative">
                    <img
                        src="http://www.zefit.co.kr/data/slider/3551210086_0f617416_20811665.png"
                        alt="상단 배너 이미지"
                        className="w-full h-full absolute top-0 left-0 z-10 object-cover object-center" />
                    <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0 z-[11]" />
                    <div className="web:w-[1170px] w-full h-full flex flex-col justify-center items-start gap-4 absolute top-0 left-[calc(50%-585px)] text-white z-[13]">
                        <h1 className="text-[64px] font-bold">
                            Greater Value For Your Life
                        </h1>
                        <p className="text-[24px] font-medium">
                            Using zebrafish, in-vivo model based biotech & pharmaceutical company
                        </p>
                    </div>
                </section>
                <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20">
                    <div className="w-[60%] flex flex-col justify-center items-center gap-10">
                        <h3 className="text-[32px] font-semibold">
                            Company
                        </h3>
                        {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
                        <p className="w-full text-[24px] font-normal text-center">
                            <span className="font-bold">
                                제핏은 제브라피쉬 전문 CRO로 혁신적인 진단장비
                            </span>
                            를 활용하여 전임상단계의 신약후보물질의 발굴을 돕는&nbsp;
                            <span className="font-bold">
                                비임상 CRO 회사입니다.
                            </span>
                        </p>
                        <div className="w-full h-[300px] bg-gray-500"></div>
                        <ul className="w-full flex justify-center items-center gap-8">
                            <li className="w-[300px] flex justify-center items-start gap-10 border-r">
                                <div className="flex flex-col justify-center items-start">
                                    <strong className="text-[18px] font-semibold">회사개요</strong>
                                    <p>회사개요 설명글</p>
                                </div>
                                <a href="/content/company" className="cursor-pointer hover:translate-x-1 transition-all">→</a>
                            </li>
                            <li className="w-[300px] flex justify-center items-start gap-10">
                                <div className="flex flex-col justify-center items-start">
                                    <strong className="text-[18px] font-semibold">연혁</strong>
                                    <p>회사연혁 설명글</p>
                                </div>
                                <a href="/content/history" className="cursor-pointer hover:translate-x-1 transition-all">→</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full flex flex-col justify-center items-center gap-16 py-14
                    bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img4.jpg')] bg-no-repeat bg-cover bg-fixed">
                    <h3 className="text-[32px] font-semibold text-white">
                        Business
                    </h3>
                    {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
                    <ul className="w-full flex justify-center items-center gap-32">
                        <li>
                            <a
                                href="/content/zebrafish"
                                className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-red-400 bg-opacity-90 text-white">
                                Model
                            </a>
                        </li>
                        <li>
                            <a
                                href="/content/CNS_FIT"
                                className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-blue-400 bg-opacity-90 text-white">
                                Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="/content/pharmaceuticals"
                                className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-green-400 bg-opacity-90 text-white">
                                pharmaceuticals
                            </a>
                        </li>
                    </ul>
                </section>
                <PartnerList isOne={false} />
                <Contact />
                <ContactButton />
            </article>
        </main>
    );
}