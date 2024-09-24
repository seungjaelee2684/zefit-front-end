'use client';

import ScrollGuide from '@/components/LandingPage/ScrollGuide';
import '../styles/landing.css';

export default function Home() {
    return (
        <main>
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
            </article>
            {/* <svg className='test1' viewBox="0 0 202 42" preserveAspectRatio="none">
                <rect className='testChild' x="1" y="1" width="200" height="40"></rect>
            </svg> */}
        </main>
    );
}