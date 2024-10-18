'use client';

import './style.css';

export default function AdmScrollTop() {

    const onClickScrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={onClickScrollTopHandler}
            className='adm_scroll_top_button'>
            <span className='adm_top_arrow'>
                ▲
            </span>
            top
        </button>
    )
};