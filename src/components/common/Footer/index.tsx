'use client';

import { usePathname } from 'next/navigation';
import './style.css';

export default function Footer() {

    const path = usePathname();

    return (
        <footer
            style={{ display: (path?.includes('/adm')) ? 'none' : '' }}
            className='footer_container'>
            <div className='wave' />
            <h4>
                <nav>
                    <ul className='footer_link_wrapper'>
                        <li>
                            <a className='footer_link'>
                                이용약관
                            </a>
                        </li>
                        <li>
                            <a className='footer_link'>
                                개인정보취급방침
                            </a>
                        </li>
                        <li>
                            <a className='footer_link'>
                                오시는길
                            </a>
                        </li>
                    </ul>
                </nav>
            </h4>
            <p className='footer_content_wrapper'>
                16, Techno gongwon-ro, Hyeonpung-eup, Dalseong-gun, Daegu, Republic of Korea
                <br />
                <i className='icon-envelope'></i>
                info@zefit.co.kr ·&nbsp;&nbsp;
                <i className='icon-earphones'></i>
                053 716 0816 ·
                <br />
                Copyright ⓒ 2018 Zefit. All rights reserved.
            </p>
        </footer>
    )
};