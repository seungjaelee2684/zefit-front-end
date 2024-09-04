'use client';

import Contact from "@/components/LandingPage/Contact";
import HomeHeader from "@/components/common/HomeHeader";
import PartnerList from "@/components/common/PartnerList";
import ScrollAmount from "@/components/common/ScrollAmount";

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
        <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20">
          <h3 className="w-full text-[32px] font-semibold">
            COMPANY
          </h3>
          <div className="w-[100%] flex justify-center items-center gap-10">
            <div className="w-[100%] flex flex-col justify-center items-start gap-10">
              {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
              <p className="w-full text-[24px] font-normal text-start">
                <span className="font-bold">
                  제핏은 제브라피쉬 전문 CRO로 혁신적인 진단장비
                </span>
                를 활용하여 전임상단계의 신약후보물질의 발굴을 돕는&nbsp;
                <span className="font-bold">
                  비임상 CRO 회사입니다.
                </span>
              </p>
              <a
                href="/content/company"
                className="px-[32px] py-[10px] bg-transparent border border-[#444444] text-[20px] text-[#444444] rounded-full cursor-pointer
                 hover:text-white hover:border-zefit-hover hover:bg-zefit-hover transition-all">
                자세히 보기
              </a>
            </div>
            <div className="min-w-[500px] h-[300px] bg-gray-500 flex justify-center items-end py-10"></div>
          </div>
        </section>
        <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20 mt-10">
          <div className="w-[100%] flex justify-center items-center gap-10">
            <div className="min-w-[500px] h-[300px] bg-gray-500 flex justify-center items-end py-10"></div>
            <div className="w-[100%] flex flex-col justify-center items-end gap-10">
              {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
              <p className="w-full text-[24px] font-normal text-start">
                제핏은 early in-vivo testing model인
                제브라피쉬를 활용하여 새로운 화합물의
                안전성, 유효성 및 의학적 연관성을 분석하여 제공하고 있습니다.
              </p>
              <a 
                href="/content/company"
                className="px-[32px] py-[10px] bg-transparent border border-[#444444] text-[20px] text-[#444444] rounded-full cursor-pointer
                 hover:text-white hover:border-zefit-hover hover:bg-zefit-hover transition-all">
                자세히 보기
              </a>
            </div>
          </div>
        </section>
        <section className="w-full h-[500px] flex flex-col justify-center items-center gap-10 relative mb-[40px]">
          <div className="w-full h-[300px] absolute bottom-[-60px] left-0 bg-gray-600" />
          <div className="w-full flex flex-col justify-center items-center gap-10 absolute bottom-0 left-0 z-[2]">
            <h3 className="w-[1170px] text-[32px] font-semibold">
              OUR BUISNESS
            </h3>
            {/* <div className="w-[50px] h-[2px] bg-zefit-normal" /> */}
            <ul className="w-[94%] web:w-[1170px] h-[380px] flex justify-start items-center gap-10">
              <li className="w-full h-full bg-gray-300 flex flex-col justify-center items-center gap-4 text-white">
                <div className="w-[30px] h-[1px] bg-white"></div>
                <strong className="text-[32px] font-semibold">모델</strong>
                <p className="text-[24px] font-medium">제브라피쉬에 관련된 한줄글</p>
                <a
                  href="/content/zebrafish"
                  className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                  자세히 보기
                </a>
              </li>
              <li className="w-full h-full bg-gray-400 flex flex-col justify-center items-center gap-4 text-white">
                <div className="w-[30px] h-[1px] bg-white"></div>
                <strong className="text-[32px] font-semibold">서비스</strong>
                <p className="text-[24px] font-medium">서비스에 관련된 한줄글</p>
                <a
                  href="/content/CNS_FIT"
                  className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                  자세히 보기
                </a>
              </li>
              <li className="w-full h-full bg-gray-500 flex flex-col justify-center items-center gap-4 text-white">
                <div className="w-[30px] h-[1px] bg-white"></div>
                <strong className="text-[32px] font-semibold">신약개발</strong>
                <p className="text-[24px] font-medium">신약개발에 관련된 한줄글</p>
                <a
                  href="/content/pharmaceuticals"
                  className="px-[32px] py-[10px] bg-transparent border border-white mt-[30px] text-[20px] rounded-full cursor-pointer
                hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all">
                  자세히 보기
                </a>
              </li>
            </ul>
          </div>
        </section>
        <Contact />
        <PartnerList />
      </article>
    </main>
  );
}
