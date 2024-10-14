'use client';

import { usePathname } from 'next/navigation';
import './style.css';

export default function FloatingButton() {

    const path = usePathname();

    const onClickScrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            style={{ display: (path === '/adm' ? 'none' : '') }}
            className='floating_button_container'>
            <a
                href='/requests'
                className='contact_floating_button'>
                <i
                    style={{ fontSize: '24px' }}
                    className='icon-envelope'></i>
                Contact
            </a>
            <button
                onClick={onClickScrollTopHandler}
                className='scroll_top_floating_button'>
                <i
                    style={{ fontSize: '24px' }}
                    className='icon-arrow-up'></i>
                TOP
            </button>
        </div>
    )
};