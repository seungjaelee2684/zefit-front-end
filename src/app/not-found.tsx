'use client';

import '@/styles/not-found.css';

export default function NotFoundError() {
    return (
        <article className='error_layout'>
            <svg height="100" width="100">
                <polygon points="50,25 17,80 82,80" stroke-linejoin="round" style={{ fill: 'none', stroke:'#ff8a00', strokeWidth: '8'}}></polygon>
                <text x="42" y="74" fill="#ff8a00" font-family="sans-serif" font-weight="900" font-size="42px">!</text>
            </svg>
            <h1 className='error_title'>
                File not found (404 error)
            </h1>
            <h2 className='error_sub_title'>
                {`If you think what you're looking for should be here, please contact\nthe site owner.`}
            </h2>
        </article>
    )
};