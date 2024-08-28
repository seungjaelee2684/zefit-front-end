'use client';

export default function Home() {
  return (
    <article className="w-[100%] flex min-h-screen flex-col items-center justify-between gap-24">
      <section className="w-[100%] h-[100dvh] relative">
        <img
          src="http://www.zefit.co.kr/data/slider/3551210086_0f617416_20811665.png"
          alt="상단 배너 이미지"
          className="w-[100%] h-[100%] absolute top-0 left-0 z-10 object-cover object-center" />
        <div className="w-[100%] h-[100%] bg-black opacity-30 absolute top-0 left-0 z-[11]" />
        <h1 className="w-[100%] h-[100%] flex justify-center items-center absolute top-0 left-0 text-[64px] font-bold text-white z-[12]">
          Greater Value For Your Life
        </h1>
      </section>
      <div className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-20">
        <section className="w-[60%] flex flex-col justify-center items-center gap-10">
          <h3 className="text-[20px] font-semibold">
            COMPANY
          </h3>
          <p className="w-[100%] text-[24px] font-normal text-center">
            <span className="font-bold">
              제핏은 제브라피쉬 전문 CRO로 혁신적인 진단장비
            </span>
            를 활용하여 전임상단계의 신약후보물질의 발굴을 돕는&nbsp;
            <span className="font-bold">
              비임상 CRO 회사입니다.
            </span>
          </p>
          <div className="w-[100%] h-[300px] bg-gray-500"></div>
        </section>
        <section className="w-[100%] flex flex-col justify-center items-center gap-10">
          <h3 className="text-[20px] font-semibold">
            BUSINESS
          </h3>
          <ul className="w-[calc(100dvw-17px)] h-[600px] flex justify-start items-center">
            <li className="w-[100%] h-[100%] bg-gray-300 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">모델</strong>
              <p className="text-[24px] font-medium">제브라피쉬에 관련된 한줄글</p>
            </li>
            <li className="w-[100%] h-[100%] bg-gray-400 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">서비스</strong>
              <p className="text-[24px] font-medium">서비스에 관련된 한줄글</p>
            </li>
            <li className="w-[100%] h-[100%] bg-gray-500 flex flex-col justify-center items-center gap-4 text-white">
              <div className="w-[30px] h-[1px] bg-white"></div>
              <strong className="text-[32px] font-semibold">신약개발</strong>
              <p className="text-[24px] font-medium">신약개발에 관련된 한줄글</p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
