import './style.css';

interface PageBannerProps {
    pageTitle: string;
}

export default function PageBanner({ pageTitle }: PageBannerProps) {
    return (
        <section className='page_top_banner_container'>
            <div className='page_top_banner_text_box'>
                <h1 className='page_top_banner_title'>
                    {pageTitle}
                </h1>
                <p className='page_top_banner_sub_title'>
                    인류 최대 행복 실현을 위한 끊임없는 혁신
                </p>
            </div>
        </section>
    )
};