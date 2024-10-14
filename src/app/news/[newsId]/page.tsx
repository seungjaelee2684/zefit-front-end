'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import './style.css';
import '../../notice/[noticeId]/style.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsDetail() {

    const { newsId }: any = useParams();

    const [newsData, setNewsData] = useState<any>(null);
    console.log("🚀 ~ NewsDetail ~ newsData:", newsData)

    useEffect(() => {
        if (newsId) {
            fetch(`/api/inquiry/news_detail/${newsId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((jsonData) => {
                    setNewsData(jsonData);
                })
                .catch((error) => console.error("Fetch error:", error));
        };
    }, [newsId]);

    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='보도자료' />
            <PageTap tap='community' />
            <section className='page_layout'>
                <div className='notice_detail_page_container'>
                    <ul className='notice_detail_tap_wrapper'>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-calendar'></i>
                            {newsData?.date}
                        </li>
                        <li className='notice_detail_tap_content'>
                            /
                        </li>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-user'></i>
                            {newsData?.writer}
                        </li>
                        <li className='notice_detail_tap_content'>
                            /
                        </li>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-emotsmile'></i>
                            {newsData?.watching}
                        </li>
                        <li className='notice_detail_tap_content'>
                            /
                        </li>
                        <li>
                            <a
                                href='/notice'
                                className='notice_detail_tap_button'>
                                <i className='icon-menu'></i>
                                목록
                            </a>
                        </li>
                    </ul>
                    <h2 className='notice_detail_title'>
                        {newsData?.title}
                    </h2>
                    {newsData?.content.image.map((item: any, index: number) =>
                        <img
                            key={index}
                            className='news_detail_Image'
                            src={item}
                            alt={`보도자료 이미지 ${index}`} />
                    )}
                    <p className='notice_detail_content'>
                        {newsData?.content.text}
                    </p>
                    <a
                        href={newsData?.link}
                        target='_blank'
                        className='news_detail_link_button'>
                        <i className='icon-link'></i>
                        <p className='news_detail_link_button_text'>
                            {newsData?.link}
                        </p>
                    </a>
                </div>
            </section>
        </article>
    )
};