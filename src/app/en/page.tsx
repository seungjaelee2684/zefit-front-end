'use client';

import ScrollGuide from '@/components/LandingPage/ScrollGuide';
import '../styles/landing.css';
import MainHeader from '@/components/common/MainHeader';

export default function EnglishHome() {
    return (
        <main>
            <MainHeader />
            <article>
                <section className='landing_top_banner'>
                    <div className='top_banner_text_box'>
                        <h1 className='top_banner_title'>
                            Greater Value For Your Life
                        </h1>
                        <p className='top_banner_caption'>
                            Using zebrafish, in-vivo model based biotech & pharmaceutical company
                        </p>
                    </div>
                    <ScrollGuide />
                </section>
                <div className='landing_content_wrapper'>
                    <section className='landing_company_intro_wrapper'>
                        <h2 className='company_title'>
                            ABOUT COMPANY
                        </h2>
                        <h3 className='company_sub_title'>
                            <span className='company_bold_text'>제핏은 제브라피쉬 전문 CRO로 혁신적인 진단장비</span>
                            {`를 활용하여 전\n임상단계의 신약후보물질의 발굴을 돕는 `}
                            <span className='company_bold_text'>비임상 CRO 회사입니다.</span>
                        </h3>
                        <img
                            className='company_image'
                            src='http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_img1.jpg'
                            alt='회사소개 이미지' />
                        <ul className='company_link_button_wrapper'>
                            <li className='company_link_button_box'>
                                <a className='company_link_button'>
                                    <div className='link_button_text_wrapper'>
                                        <strong className='link_button_title'>
                                            회사 개요
                                        </strong>
                                        <p className='link_button_content'>
                                            {`인류 최대 행복 실현을 위한 끊임없는 혁신`}
                                        </p>
                                    </div>
                                    <span className='link_button_arrow'>
                                        →
                                    </span>
                                </a>
                            </li>
                            <li className='company_link_button_box'>
                                <a className='company_link_button'>
                                    <div className='link_button_text_wrapper'>
                                        <strong className='link_button_title'>
                                            회사 연혁
                                        </strong>
                                        <p className='link_button_content'>
                                            {`혁신적인 발전을 이루는 노력의 길`}
                                        </p>
                                    </div>
                                    <span className='link_button_arrow'>
                                        →
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className='landing_business_content'>

                    </section>
                </div>
            </article>
            {/* <svg className='test1' viewBox="0 0 202 42" preserveAspectRatio="none">
                <rect className='testChild' x="1" y="1" width="200" height="40"></rect>
            </svg> */}
        </main>
    );
};