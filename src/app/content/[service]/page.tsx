'use client';

import PageBanner from "@/components/common/PageBanner"
import PageHeader from "@/components/common/PageHeader"
import { businessNavList } from "@/data/navData"
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Service() {

    const pathname = usePathname();

    const tapRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<number>(window.scrollY);

    useEffect(() => {
        const scrollEvent = () => {
            if (!tapRef.current) return;

            const scrolly = window.scrollY;
            console.log("🚀 ~ scrollEvent ~ scrolly:", scrolly >= 380)
            setScroll(scrolly);

            if (scrolly >= 380) {
                tapRef.current.style.position = 'fixed';
            } else {
                tapRef.current.style.position = 'static';
            };
        };

        document.addEventListener('scroll', scrollEvent);

        return () => {
            document.removeEventListener('scroll', scrollEvent);
        }
    }, []);

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center">
                <PageBanner>시스템</PageBanner>
                <section ref={tapRef} className="w-full top-[60px] left-0 z-[19] bg-white flex justify-center items-center">
                    <ul className="w-[94%] web:w-[1170px] flex items-center h-[70px]">
                        {businessNavList[1].list?.map((item: any, index: number) =>
                            <li key={index} className="w-full h-full">
                                {(pathname === item.href)
                                    ? <a
                                        href={item.href}
                                        className="w-full h-full text-[18px] font-semibold border
                                            bg-zefit-hover text-white border-zefit-hover flex justify-center items-center">
                                        {item.id}
                                    </a>
                                    : <a
                                        href={item.href}
                                        className="w-full h-full text-[18px] font-semibold border
                                            hover:bg-zefit-hover hover:text-white hover:border-zefit-hover active:bg-zefit-heavy flex justify-center items-center">
                                        {item.id}
                                    </a>}
                            </li>
                        )}
                    </ul>
                </section>
                <section className="w-[94%] web:w-[1170px] flex justify-center items-center mt-[80px] gap-8">
                    <p className="w-full text-[16px]">
                        자동화된 운동 측정, 신경형태에 대한 연구 및 복잡한 인지 기능을 포함하는 일련의 신경학적 표현형을 비용 효율적이고 검증된 방식으로 평가할 수 있습니다. 척추동물 중 CNS는 고도로 보존되어 있으며 zebrafish는 투명성 덕분에 생체 내 및 비침습적 마커를 허용합니다. 또한 자손수가 많기 때문에 대량 분석 데이터를 제공할 수 있습니다.
                        <br />
                        제핏은 알츠하이머병, 파킨슨병, 간질과 관련 행동과 전기생리학적 변화에 대한 연구 데이터를 제공합니다. CNS-FITTM 플랫폼은 질병을 안정적으로 모델링하여 화합물에 대한 유효성 검증이 가능하도록합니다.
                    </p>
                    <div className="min-w-[500px] h-[300px] bg-gray-400"></div>
                </section>
                <section className="w-[94%] web:w-[1170px] flex justify-center items-center mt-[80px] gap-8">
                    <div className="min-w-[500px] h-[300px] bg-gray-400"></div>
                    <p className="w-full text-[16px]">
                        자동화된 운동 측정, 신경형태에 대한 연구 및 복잡한 인지 기능을 포함하는 일련의 신경학적 표현형을 비용 효율적이고 검증된 방식으로 평가할 수 있습니다. 척추동물 중 CNS는 고도로 보존되어 있으며 zebrafish는 투명성 덕분에 생체 내 및 비침습적 마커를 허용합니다. 또한 자손수가 많기 때문에 대량 분석 데이터를 제공할 수 있습니다.
                        <br />
                        제핏은 알츠하이머병, 파킨슨병, 간질과 관련 행동과 전기생리학적 변화에 대한 연구 데이터를 제공합니다. CNS-FITTM 플랫폼은 질병을 안정적으로 모델링하여 화합물에 대한 유효성 검증이 가능하도록합니다.
                    </p>
                </section>
            </article>
        </main>
    )
};