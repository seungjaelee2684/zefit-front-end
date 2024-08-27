'use client';

import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%] flex min-h-screen flex-col items-center justify-between">
      <article className="w-[100%] flex min-h-screen flex-col items-center justify-between gap-8">
        <section className="bg-[url('http://www.zefit.co.kr/data/slider/3551210086_0f617416_20811665.png')] w-[100%] h-[100dvh] relative">
          <div className="w-[100%] h-[100%] bg-black opacity-10" />
          <div className="w-[100%] h-[100%] flex justify-center items-center absolute top-0 left-0 text-[64px] font-bold text-white">
            Greater Value For Your Life
          </div>
        </section>
        <section className="w-[96%] web:w-[1170px] flex flex-col justify-center items-start gap-4">
          <h2 className="text-[32px] font-bold">
            INTRODUCE
          </h2>
          <p className="text-[24px] font-normal">
            제핏은 제브라피쉬 전문 CRO로 혁신적인 진단장비를 활용하여 전임상단계의 신약후보물질의 발굴을 돕는 비임상 CRO 회사입니다.
          </p>
        </section>
      </article>
    </main>
  );
}
