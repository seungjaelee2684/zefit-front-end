'use client';

import ContactButton from "@/components/common/ContactButton";
import PartnerList from "@/components/common/PartnerList";
import HomeHeader from "@/components/common/HomeHeader";
import Contact from "@/components/LandingPage/Contact";

export default function Home() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between">
            <HomeHeader />
            <article className="w-full flex min-h-screen flex-col items-center justify-between">
                <section className="w-full h-dvh relative bg-cover bg-no-repeat bg-fixed
                    bg-[url('http://www.zefit.co.kr/data/slider/3551210086_0f617416_20811665.png')]">
                    <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0 z-[11]" />
                    <div className="w-[94%] web:w-[1170px] h-full absolute top-0 left-[calc(50%-585px)] flex justify-end items-center z-[13]">
                        <div className="w-[460px] h-[480px] flex flex-col justify-center items-start gap-6 text-white bg-zefit-normal bg-opacity-80 p-8">
                            <h1 className="text-[54px] font-bold">
                                Greater Value For Your Life
                            </h1>
                            <p className="text-[20px] font-medium">
                                Using zebrafish, in-vivo model based biotech & pharmaceutical company
                            </p>
                            <a
                                href="/contact"
                                className="w-[160px] h-[48px] bg-white text-[#444444] cursor-pointer flex justify-center items-center gap-4 rounded-full
                                mt-10 font-semibold
                                text-[18px] hover:bg-zefit-neutral hover:border-zefit-neutral hover:bg-opacity-50 hover:text-white transition-all">
                                문의하기
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20 my-16">
                    <div className="w-[60%] flex flex-col justify-center items-center gap-10">
                        <h3 className="text-[28px] font-medium text-zefit-normal">
                            ABOUT COMPANY
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
                        <img src="http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img1.jpg" alt="company" className="w-full h-[380px] object-cover" />
                        <ul className="w-[60%] flex justify-center items-center gap-8">
                            <li>
                                <a href="/content/company" className="w-[300px] flex justify-center items-start gap-10 border-r group">
                                    <div className="flex flex-col justify-center items-start group-hover:text-zefit-heavy">
                                        <strong className="text-[20px] font-semibold">회사개요</strong>
                                        <p>회사개요 설명글</p>
                                    </div>
                                    <div className="cursor-pointer group-hover:translate-x-1 group-hover:text-zefit-heavy transition-all ease-in-out">→</div>
                                </a>
                            </li>
                            <li>
                                <a href="/content/history" className="w-[300px] flex justify-center items-start gap-10 group">
                                    <div className="flex flex-col justify-center items-start group-hover:text-zefit-heavy">
                                        <strong className="text-[20px] font-semibold">연혁</strong>
                                        <p>회사연혁 설명글</p>
                                    </div>
                                    <div className="cursor-pointer group-hover:translate-x-1 group-hover:text-zefit-heavy transition-all ease-in-out">→</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full h-[580px] mt-16 relative
                    bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img4.jpg')] bg-no-repeat bg-cover bg-fixed">
                    <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-30" />
                    <div className="w-full h-full flex flex-col justify-between items-center absolute top-0 left-0 z-[1] py-12">
                        <h3 className="text-[28px] font-medium text-white">
                            OUR BUSINESS
                        </h3>
                        {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
                        <ul className="w-full flex justify-center items-center gap-10">
                            <li>
                                <a
                                    href="/content/zebrafish"
                                    className="w-[300px] h-[340px] flex flex-col justify-start items-center transition-all shadow-custom-rounded
                                        bg-white bg-opacity-50 text-black overflow-hidden hover:bg-zefit-neutral hover:text-white hover:bg-opacity-50">
                                    <img
                                        src="http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img2.jpg"
                                        alt="모델 이미지"
                                        className="w-full min-h-[200px] object-cover" />
                                    <div className="w-full h-full flex flex-col justify-start items-center gap-4 p-4">
                                        <strong className="text-[24px] font-bold">Model</strong>
                                        <p>제브라피쉬에 대한 설명글</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/content/CNS_FIT"
                                    className="w-[300px] h-[340px] flex flex-col justify-start items-center transition-all shadow-custom-rounded
                                        bg-white bg-opacity-50 text-black overflow-hidden hover:bg-zefit-neutral hover:text-white hover:bg-opacity-50">
                                    <img
                                        src="http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img3.jpg"
                                        alt="서비스 이미지"
                                        className="w-full min-h-[200px] object-cover" />
                                    <div className="w-full h-full flex flex-col justify-start items-center gap-4 p-4">
                                        <strong className="text-[24px] font-bold">Service</strong>
                                        <p>서비스에 대한 설명글</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/content/pharmaceuticals"
                                    className="w-[300px] h-[340px] flex flex-col justify-start items-center transition-all shadow-custom-rounded
                                        bg-white bg-opacity-50 text-black overflow-hidden hover:bg-zefit-neutral hover:text-white hover:bg-opacity-50">
                                    <img
                                        src="http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img10.jpg"
                                        alt="신약개발 이미지"
                                        className="w-full min-h-[200px] object-cover" />
                                    <div className="w-full h-full flex flex-col justify-start items-center gap-4 p-4">
                                        <strong className="text-[24px] font-bold">Pharmaceuticals</strong>
                                        <p>신약개발에 대한 설명글</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <PartnerList />
                <Contact />
            </article>
        </main>
    );
}