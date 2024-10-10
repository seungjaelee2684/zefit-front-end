'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import '../../service/[service]/style.css';
import './style.css';
import { useState } from "react";
import SideTap from "@/components/common/SideTap";
import { businessNavList } from "@/data/navData";

export default function Pharmaceuticals() {

    const developmentData = businessNavList[2].list?.map((item: any) => item.id);
    
    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='신약개발' />
            <PageTap tap='business' />
            <SideTap tap={developmentData} content='development' />
            <div className='page_layout'>
                <section className='pharmaceuticals_page_container'>
                    <h2 className='service_page_title'>
                        <div className='service_page_side_bar' />
                        신약개발기술
                    </h2>
                    <div className='pharmaceuticals_page_top_info_container'>
                        <div className='top_info_background_box' />
                        <img
                            className='top_info_image'
                            src='http://www.zefit.co.kr/theme/basic/assets/images/zefit/adult_eeg_system_bg.jpg'
                            alt='신약개발기술' />
                        <div className='top_info_content_wrapper'>
                            <div className='top_info_content_box'>
                                <h3 className='top_info_title'>
                                    Drug Discovery Platform
                                </h3>
                                <p className='top_info_content'>
                                    신약후보 물질을 발굴에서 최적화에 이르는 고효율 신약개발 플랫폼을 통해 선도물질 발굴부터 전임상 후보단계의 개발까지 신약개발 기간의 혁신적 단축 '3년 이내 전임상 후보물질 도출' in vivo에서 축적된 데이터를 바탕으로 한 혁신신약 개발 플랫폼 구축
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bottom_content_container'>
                    <ul className='bottom_content_card_wrapper'>
                        <li className='card_box'>
                            <div className='card_next_step_arrow'>
                                <i className='icon-arrow-right' />
                            </div>
                            <img
                                className='card_box_icon'
                                src='http://www.zefit.co.kr/theme/basic/assets/images/zefit/pharmaceuticals-img1.png'
                                alt='기존 CNS 신약개발의 문제점 아이콘' />
                            <strong className='card_box_title'>
                                기존 CNS 신약개발의 문제점
                            </strong>
                            <div className='card_text_box'>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        In-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        asdfasdfadsfIn-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className='card_box'>
                            <div className='card_next_step_arrow'>
                                <i className='icon-arrow-right' />
                            </div>
                            <img
                                className='card_box_icon'
                                src='http://www.zefit.co.kr/theme/basic/assets/images/zefit/pharmaceuticals-img3.png'
                                alt='기존 CNS 신약개발의 문제점 아이콘' />
                            <strong className='card_box_title'>
                                기존 CNS 신약개발의 문제점
                            </strong>
                            <div className='card_text_box'>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        In-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        asdfasdfadsfIn-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className='card_box'>
                            <img
                                className='card_box_icon'
                                src='http://www.zefit.co.kr/theme/basic/assets/images/zefit/pharmaceuticals-img2.png'
                                alt='기존 CNS 신약개발의 문제점 아이콘' />
                            <strong className='card_box_title'>
                                기존 CNS 신약개발의 문제점
                            </strong>
                            <div className='card_text_box'>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        In-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                                <div className='card_text_box_lane'>
                                    <div className='card_text_box_lane_point' />
                                    <p className='card_text_box_lane_font'>
                                        asdfasdfadsfIn-vitro에서 in-vivo 간 번역의 어려움
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    )
};