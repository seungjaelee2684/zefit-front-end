'use client';

import Contact from "@/components/Contact";
import HomeHeader from "@/components/common/HomeHeader";
import PartnerList from "@/components/common/PartnerList";
import ScrollAmount from "@/components/common/ScrollAmount";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
      <HomeHeader />
      <article className="w-full flex min-h-screen flex-col items-center justify-between gap-24">
        <section className="w-full h-dvh relative">
          <img
            src="http://www.zefit.co.kr/data/slider/3551210086_0f617416_20811665.png"
            alt="상단 배너 이미지"
            className="w-full h-full absolute top-0 left-0 z-10 object-cover object-center" />
          <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[11]" />
          {/* <div className="w-[300px] h-[400px] absolute bottom-0 left-0 bg-blue-800 bg-opacity-60 z-[12]" /> */}
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
        <section className="w-full flex flex-col justify-center items-center gap-10">
          <h3 className="text-[32px] font-semibold">
            Business
          </h3>
          {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
          <ul className="w-[calc(100dvw-17px)] h-[600px] flex justify-start items-center">
            <li className="w-full h-full bg-gray-300 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">모델</strong>
              <p className="text-[24px] font-medium">제브라피쉬에 관련된 한줄글</p>
              <a className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                자세히 보기
              </a>
            </li>
            <li className="w-full h-full bg-gray-400 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">서비스</strong>
              <p className="text-[24px] font-medium">서비스에 관련된 한줄글</p>
              <a className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                자세히 보기
              </a>
            </li>
            <li className="w-full h-full bg-gray-500 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">신약개발</strong>
              <p className="text-[24px] font-medium">신약개발에 관련된 한줄글</p>
              <a className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                자세히 보기
              </a>
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
