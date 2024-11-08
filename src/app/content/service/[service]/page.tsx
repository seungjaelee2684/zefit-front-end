'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";

// 현재안
import './style.css';

// 반영안
// import './test-style.css';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SideTap from "@/components/common/SideTap";
import MetaTagTitle from "@/utils/MetaTagTitle";
import { useRecoilState } from "recoil";
import { isLoading } from "@/modules/loading";
import TestServiceDetailTap from "@/components/page/ServicePage/TestServiceDetailTap";
import ServiceDetailTap from "@/components/page/ServicePage/ServiceDetailTap";

export default function Service() {

    const { service }: any = useParams();

    const [, setLoading] = useRecoilState(isLoading);

    const [serviceData, setServiceData] = useState<any>(null);
    const [serviceTap, setServiceTap] = useState<any>(null);
    const [present, setPresent] = useState<number>(0);
    const [prev, setPrev] = useState<number | null>(null);

    const findData = serviceData?.find((item: any) => item?.service === service);
    const sideTapData = serviceData?.map((item: any) => item?.service);

    const onClickTapHandler = (index: number) => {
        setPresent(index);
        setPrev(present);
    };

    useEffect(() => {
        setLoading(true);

        if (service) {
            fetch(`/api/inquiry/service/${service}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((jsonData) => {
                    const findData = jsonData?.find((item: any) => item?.service === service);
                    setServiceData(jsonData);
                    setServiceTap(findData.content);
                })
                .catch((error) => console.error("Fetch error:", error))
                .finally(() => {
                    setLoading(false);
                });
        };
    }, [service]);

    return (
        <article style={{ position: 'relative' }}>
            <MetaTagTitle title='서비스' />
            <PageHeader />
            <PageBanner pageTitle='서비스' />
            <PageTap tap='business' />
            <SideTap tap={sideTapData} content='service' />

            {/* 현재안 */}
            <div className='page_layout'>
                <section className='service_page_container'>
                    <h2 className='service_page_title'>
                        <div className='service_page_side_bar' />
                        {service}
                    </h2>
                    <div className='service_page_info_wrapper'>
                        <div className='service_page_info_box'>
                            <h3 className='service_page_info_box_title'>
                                {findData?.model}
                            </h3>
                            {findData?.introduce.map((item: string, index: number) =>
                                <p
                                    key={index}
                                    className='service_page_info_box_content'>
                                    {item}
                                </p>
                            )}
                        </div>
                        <img
                            className='service_info_image'
                            src={findData?.thumbnail}
                            alt={findData?.service} />
                    </div>
                </section>
                <ServiceDetailTap
                    findData={findData}
                    serviceTap={serviceTap}
                    onClickTapHandler={onClickTapHandler}
                    present={present}
                    prev={prev} />
            </div>

            {/* 반영안 */}
            {/* <div className="page_layout">
                <section className='service_page_container2'>
                    <h2 className='service_page_title2'>
                        <div className='service_page_side_bar2' />
                        {service}
                    </h2>
                    <div className='service_page_info_wrapper2'>
                        <img
                            className='service_info_image2'
                            src={findData?.thumbnail}
                            alt={findData?.service} />
                        <div className='service_page_info_box2'>
                            <h3 className='service_page_info_box_title2'>
                                {findData?.model}
                            </h3>
                            {findData?.introduce.map((item: string, index: number) =>
                                <p
                                    key={index}
                                    className='service_page_info_box_content2'>
                                    {item}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
                <section className="service_page_detail_container">
                    <div className="service_page_detail_wrapper">
                        <ul className="detail_tap_wrapper">
                            {findData?.content.map((item: any, index: number) =>
                                <li
                                    key={index}
                                    className="detail_tap_button_list">
                                    <button
                                        onClick={() => onClickTapHandler(index)}
                                        className={
                                            (present === index)
                                                ? "select_detail_tap_button"
                                                : "detail_tap_button"
                                        }>
                                        {item?.name}
                                    </button>
                                </li>
                            )}
                        </ul>
                        <TestServiceDetailTap
                            serviceTap={serviceTap}
                            present={present}
                            prev={prev} />
                    </div>
                </section>
            </div> */}

        </article>
    )
};