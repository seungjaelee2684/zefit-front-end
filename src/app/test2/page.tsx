'use client';

import ContactButton from "@/components/common/ContactButton";
import HomeHeader from "@/components/common/HomeHeader";
import PartnerList from "@/components/common/PartnerList";
import ScrollAmount from "@/components/common/ScrollAmount";
import TestHeader from "@/components/common/TestHeader";
import Contact from "@/components/LandingPage/Contact";

export default function TestHome2() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between">
            <TestHeader />
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
                <div className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20">
                    <section className="w-[60%] flex flex-col justify-center items-center gap-10">
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
                    </section>
                </div>
                <section className="w-full flex flex-col justify-center items-center gap-16 py-14
                    bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img4.jpg')] bg-no-repeat bg-cover bg-fixed">
                    <h3 className="text-[32px] font-semibold text-white">
                        Business
                    </h3>
                    {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
                    <ul className="w-full flex justify-center items-center gap-32">
                        <li className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-red-400 bg-opacity-90 text-white">
                            Model
                        </li>
                        <li className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-blue-400 bg-opacity-90 text-white">
                            Service
                        </li>
                        <li className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-green-400 bg-opacity-90 text-white">
                            pharmaceuticals
                        </li>
                    </ul>
                </section>
                <PartnerList />
                <Contact />
                <ScrollAmount />
            </article>
        </main>
    );
}