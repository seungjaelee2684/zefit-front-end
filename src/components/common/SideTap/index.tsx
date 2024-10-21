import { usePathname } from 'next/navigation';
import './style.css';
import { businessNavList } from '@/data/navData';

interface SideTapProps {
    tap: any;
    content: string;
};

export default function SideTap({ tap, content }: SideTapProps) {

    const path = usePathname();

    const isEnglish = path?.includes('/en');

    const linkControl = (item: string) => {
        if (content === 'development') {
            const find = businessNavList[2].list?.find((data: any) => data.id === item);
            const result = find?.en;
            return (isEnglish) ? `/en/content/${content}/${result}` : `/content/${content}/${result}`;
        } else {
            return (isEnglish) ? `/en/content/${content}/${item}` : `/content/${content}/${item}`;
        }
    };

    return (
        <section className='service_side_tap_container'>
            <ul className='side_tap_list_wrapper'>
                {tap?.map((item: string, index: number) =>
                    <li key={index}>
                        <a
                            href={linkControl(item)}
                            className='side_tap_lane_wrapper'>
                            <p
                                style={{
                                    color: (path === linkControl(item)) ? '#0190D6' : '#57575780',
                                    fontSize: (path === linkControl(item)) ? '18px' : '16px',
                                    fontWeight: (path === linkControl(item)) ? '700' : '500',
                                    textShadow: (path === linkControl(item)) ? '2px 2px 4px #0190D63f 2px 2px 4px #ffffff3f' : ''
                                }}
                                className='side_tap_text'>
                                {item}
                            </p>
                            <div className='side_tap_right_bar_wrapper'>
                                <div
                                    style={{
                                        backgroundColor: (path === linkControl(item)) ? '#0190D6' : '#57575780',
                                        width: (path === linkControl(item)) ? '40px' : '30px',
                                        height: (path === linkControl(item)) ? '4px' : '2px',
                                        boxShadow: (path === linkControl(item)) ? '2px 2px 4px 0px #0190D63f' : ''
                                    }}
                                    className='side_tap_right_bar' />
                            </div>
                        </a>
                    </li>
                )}
            </ul>
        </section>
    )
};