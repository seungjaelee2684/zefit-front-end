import { aboutNavList, businessNavList, communityNavList } from '@/data/navData';
import './style.css';
import { usePathname } from 'next/navigation';

interface PageTapProps {
    tap: string;
};

export default function PageTap({ tap }: PageTapProps) {

    const path = usePathname();

    const pageTapChanger = () => {
        if (tap === 'company') {
            return (
                aboutNavList?.map((item: any, index: number) =>
                    <li key={index}>
                        <a
                            href={(path !== item.href) ? item.href : null}
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
                )
            )
        } else if (tap === 'community') {
            return (
                communityNavList?.map((item: any, index: number) =>
                    <li key={index}>
                        <a
                            href={(path !== item.href) ? item.href : null}
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
                )
            )
        } else if (tap === 'business') {
            return (
                businessNavList?.map((item: any, index: number) =>
                    <li key={index}>
                        <a
                            href={(!path?.includes(item.criteria)) ? item.href : null}
                            style={{
                                cursor: (path?.includes(item.criteria)) ? 'default' : 'pointer'
                            }}
                            className={
                                (path?.includes(item.criteria))
                                    ? 'page_tap_click_button'
                                    : 'page_tap_button'
                                }>
                            {item.id}
                        </a>
                    </li>
                )
            )
        };
    };
    
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
                    {pageTapChanger()}
                </ul>
            </nav>
        </section>
    )
};