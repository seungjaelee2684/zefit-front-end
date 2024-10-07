'use client';

import PageHeader from '@/components/common/PageHeader';
import './style.css';
import PageBanner from '@/components/common/PageBanner';
import PageTap from '@/components/common/PageTap';
import { useEffect } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
};

export default function ContactMap() {

    const address = '대구광역시 서구 와룡로 307 디센터1976 지식산업센터';

    useEffect(() => {
        const mapScript = document.createElement('script');

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services&autoload=false`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(0, 0), // 지도의 중심좌표 (경도 & 위도)
                    level: 3, // 지도의 확대 레벨
                };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                // 주소로 좌표 검색
                const geocoder = new window.kakao.maps.services.Geocoder();

                geocoder.addressSearch(address, function (result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(
                            result[0].y,
                            result[0].x
                        );
                        map.setCenter(coords);

                        // 마커 표시
                        const marker = new window.kakao.maps.Marker({
                            map: map,
                            position: coords,
                        });
                        marker.setMap(map);
                    }
                });

                // 추가적인 옵션 기능 (줌 & 지도타입)
                // 지도 & 스카이뷰 옵션
                const mapTypeControl = new window.kakao.maps.MapTypeControl();
                map.addControl(
                    mapTypeControl,
                    window.kakao.maps.ControlPosition.TOPRIGHT
                );

                // 줌 옵션
                const zoomControl = new window.kakao.maps.ZoomControl();
                map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
            });
        };

        mapScript.addEventListener('load', onLoadKakaoMap);
    }, []);

    return (
        <article>
            <PageHeader />
            <PageBanner pageTitle='오시는길' />
            <PageTap />
            <div
                style={{ backgroundColor: '#F6F6F6' }}
                className='page_layout'>
                <section className='contact_map_page_container'>
                    <h2 className='contact_map_page_title_wrapper'>
                        <img
                            className='title_icon'
                            src='/logos/zefit.png' />
                        Zefit으로 오시는 길을 안내드립니다.
                    </h2>
                    <div className='map_content_wrapper'>
                        <div className='kakao_map_info_wrapper'>
                            <div className='kakao_map_box'>
                                <div id="map" className='kakao_map'></div>
                                <div className='kakao_map_under_bar'>
                                    <a
                                        href='https://map.kakao.com/'
                                        target='_blank'
                                        className='kakao_logo'>
                                        <img
                                            src='http://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png'
                                            alt='카카오 로고' />
                                    </a>
                                    <a
                                        href='https://map.kakao.com/?from=roughmap&eName=%EB%8C%80%EA%B5%AC%20%EC%84%9C%EA%B5%AC%20%EC%99%80%EB%A3%A1%EB%A1%9C%20307&eX=847011.0&eY=658966.0'
                                        target='_blank'
                                        className='find_load'>
                                        길찾기
                                    </a>
                                </div>
                            </div>
                            <ul className='location_info_wrapper'>
                                <li className='location_info_lane_wrapper'>
                                    <strong className='location_info_category'>
                                        Address
                                    </strong>
                                    <div className='location_info_content_wrapper'>
                                        <span className='info_sub_title'>
                                            사무실
                                        </span>
                                        <p className='info_text'>
                                            사무실
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
};