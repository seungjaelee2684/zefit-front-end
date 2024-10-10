'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import '../../service/[service]/style.css';
import './style.css';
import { useState } from "react";
import SideTap from "@/components/common/SideTap";
import { businessNavList } from "@/data/navData";

export default function Pipeline() {

    const developmentData = businessNavList[2].list?.map((item: any) => item.id);

    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='신약개발' />
            <PageTap tap='business' />
            <SideTap tap={developmentData} content='development' />
            <div className='page_layout'>
                <section className='pipeline_page_container'>
                    <h2 className='service_page_title'>
                        <div className='service_page_side_bar' />
                        파이프라인
                    </h2>
                    <h3 className='pipeline_page_title'>
                        제핏의 신약개발 프로세스 혁신은 효율적인 신약개발이 가능하게 합니다.
                    </h3>
                </section>
                <section className='pipeline_table_container'>
                    <p className='pipeline_table_label_title'>
                        {'바이오 신호 측정기술, In-vivo 기반 약리효과 빅데이터 등과 같은 고효율 기술을 활용한\n플랫폼을 통해'}
                        &nbsp;
                        <b style={{ fontWeight: '700' }}>
                            "CNS 신약개발 파이프라인 확보"
                        </b>
                    </p>
                    <table className='table_box'>
                        <thead className='table_header'>
                            <tr className='table_header_wrapper'>
                                <th
                                    style={{ borderRight: '1px solid #cfcfcf' }}
                                    className='table_header_room'>
                                    Target Disease
                                </th>
                                <th className='table_header_room'>
                                    Product
                                </th>
                                <th className='table_header_room'>
                                    Drug discovery
                                </th>
                                <th className='table_header_room'>
                                    Lead Compounds
                                </th>
                                <th className='table_header_room'>
                                    Pre-Clinical
                                </th>
                                <th className='table_header_room'>
                                    Clinical
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table_body'>
                            <tr className='table_body_lane'>
                                <th rowSpan={2} className='table_body_room_head'>
                                    <div className='table_body_room_head_text'>
                                        Epilepsy
                                    </div>
                                </th>
                                <td className='table_body_room_sub_head'>
                                    ZT-100
                                </td>
                                <td className='table_body_room_graph'>
                                    <div className='graph_box'>
                                        <div
                                            style={{ width: '50%' }}
                                            className='graph' />
                                    </div>
                                </td>
                            </tr>
                            <tr className='table_body_lane'>
                                <th className='table_body_room_head' />
                                <td className='table_body_room_sub_head'>
                                    ZT-101
                                </td>
                                <td className='table_body_room_graph'>
                                    <div className='graph_box'>
                                        <div
                                            style={{ width: '25%' }}
                                            className='graph' />
                                    </div>
                                </td>
                            </tr>
                            <tr className='table_body_lane'>
                                <th rowSpan={2} className='table_body_room_head'>
                                    Parkinson's Disease
                                </th>
                                <td
                                    style={{ borderBottom: 'none' }}
                                    className='table_body_room_sub_head'>
                                    ZT-200
                                </td>
                                <td
                                    style={{ borderBottom: 'none' }}
                                    className='table_body_room_graph'>
                                    <div className='graph_box'>
                                        <div
                                            style={{ width: '50%' }}
                                            className='graph' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </article>
    )
};