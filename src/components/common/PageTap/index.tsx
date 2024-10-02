import { aboutNavList } from '@/data/navData';
import './style.css';
import { usePathname } from 'next/navigation';

export default function PageTap() {

    const path = usePathname();
    
    return (
        <section className='page_tap_container'>
            <nav className='page_tap_out_wrapper'>
                <a href='/' className='home_button_tap'>
                   <img
                        src='/icons/home.png'
                        alt='홈 아이콘'
                        className='home_icon' /> 
                </a>
                <ul className='page_tap_in_wrapper'>
                    {aboutNavList?.map((item: any, index: number) =>
                        <li key={index}>
                            <a
                                href={(path !== item.href) && item.href}
                                style={{
                                    cursor: (path === item.href) ? 'default' : 'pointer'
                                }}
                                className={
                                    (path === item.href)
                                        ? 'page_tap_click_button'
                                        : 'page_tap_button'
                                    }>
                                {item.id}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    )
};