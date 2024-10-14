'use client';

import PageHeader from '@/components/common/PageHeader';
import './style.css';
import PageBanner from '@/components/common/PageBanner';
import PageTap from '@/components/common/PageTap';
import DropDown from '@/components/common/DropDown';
import { useEffect, useState } from 'react';
import MetaTagTitle from '@/utils/MetaTagTitle';

export default function Notice() {

    const [dropdownValue, setDropdownValue] = useState<string>('제목');
    const [noticeData, setNoticeData] = useState<any>(null);
    const [page, setPage] = useState<number>(1);
    console.log("🚀 ~ Notice ~ noticeData:", noticeData)

    const pageList = [1, 2, 3, 4, 5];

    const specialNotice = noticeData?.filter((item: any) => item.status === 'special');
    const normalNotice = noticeData?.filter((item: any) => item.status !== 'special');

    const onSubmitSearchHandler = (e: any) => {
        e.preventDefault();
    };

    useEffect(() => {
        fetch(`/api/inquiry/notice`)
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
    }, []);

    return (
        <article>
            <MetaTagTitle title='공지사항' />
            <PageHeader />
            <PageBanner pageTitle='공지사항' />
            <PageTap tap='community' />
            <section className='page_layout'>
                <div className='notice_page_container'>
                    <h2 className='notice_page_title'>
                        Notice
                    </h2>
                    <form className='notice_page_searh_bar_container'>
                        <DropDown
                            dropdownValue={dropdownValue}
                            setDropdownValue={setDropdownValue} />
                        <input
                            className='search_bar'
                            placeholder='검색어를 입력해주세요.' />
                        <button
                            onClick={onSubmitSearchHandler}
                            className='search_button'>
                            검색
                        </button>
                    </form>
                    <div className='notice_table_wrapper'>
                        <p className='notice_table_count'>
                            전체 {noticeData?.length}건 / 1 페이지
                        </p>
                        <table className='notice_table'>
                            <thead className='notice_table_header_wrapper'>
                                <tr className='notice_table_header'>
                                    <th className='table_header_category_room'>
                                        분류
                                    </th>
                                    <th className='table_header_title_room'>
                                        제목
                                    </th>
                                    <th className='table_header_etc_room'>
                                        작성자
                                    </th>
                                    <th className='table_header_etc_room'>
                                        등록일
                                    </th>
                                    <th className='table_header_etc_room'>
                                        조회수
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='notice_table_body'>
                                {specialNotice?.map((item: any, index: number) =>
                                    <tr
                                        key={index}
                                        className='table_body_lane_wrapper'>
                                        <th className='table_header_category_room'>
                                            <div className='special_notice'>
                                                공지
                                            </div>
                                        </th>
                                        <td className='table_body_special_title_room'>
                                            <a
                                                href={`/notice/${item?.id}`}
                                                className='special_link_title_room'>
                                                {item?.title}
                                            </a>
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.writer}
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.date}
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.watching}
                                        </td>
                                    </tr>
                                )}
                                {normalNotice?.map((item: any, index: number) =>
                                    <tr
                                        key={index}
                                        className='table_body_lane_wrapper'>
                                        <th className='table_header_category_room'>
                                            {index + 1}
                                        </th>
                                        <td className='table_body_special_title_room'>
                                            <a
                                                href={`/notice/${item?.id}`}
                                                className='table_body_title_room'>
                                                {item?.title}
                                            </a>
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.writer}
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.date}
                                        </td>
                                        <td className='table_body_etc_room'>
                                            {item?.watching}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className='page_count_wrapper'>
                            {pageList.map((item: any, index: number) =>
                                <div
                                    key={index}
                                    onClick={() => setPage(item)}
                                    className={
                                    (index + 1 === page)
                                        ? 'present_page'
                                        : 'etc_page'
                                }>
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
};