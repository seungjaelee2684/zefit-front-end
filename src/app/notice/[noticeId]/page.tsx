'use client';

import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import './style.css';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MetaTagTitle from "@/utils/MetaTagTitle";

export default function NoticeDetail() {

    const { noticeId }: any = useParams();

    const [noticeData, setNoticeData] = useState<any>(null);
    console.log("🚀 ~ NoticeDetail ~ noticeData:", noticeData)

    useEffect(() => {
        if (noticeId) {
            fetch(`/api/inquiry/notice_detail/${noticeId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((jsonData) => {
                    setNoticeData(jsonData);
                })
                .catch((error) => console.error("Fetch error:", error));
        };
    }, [noticeId]);

    return (
        <article>
            <MetaTagTitle title='공지사항' />
            <PageHeader />
            <PageBanner pageTitle='공지사항' />
            <PageTap tap='community' />
            <section className='page_layout'>
                <div className='notice_detail_page_container'>
                    <ul className='notice_detail_tap_wrapper'>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-calendar'></i>
                            {noticeData?.date}
                        </li>
                        <li className='notice_detail_tap_content'>
                            /
                        </li>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-user'></i>
                            {noticeData?.writer}
                        </li>
                        <li className='notice_detail_tap_content'>
                            /
                        </li>
                        <li className='notice_detail_tap_content'>
                            <i className='icon-emotsmile'></i>
                            {noticeData?.watching}
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
                        {noticeData?.title}
                    </h2>
                    <p className='notice_detail_content'>
                        {noticeData?.content.text}
                    </p>
                </div>
            </section>
        </article>
    )
};