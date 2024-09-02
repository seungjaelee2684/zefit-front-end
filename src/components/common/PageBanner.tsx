interface PageBannerProps {
    children: React.ReactNode
};

export default function PageBanner({ children }: PageBannerProps) {
    return (
        <section className="w-full h-[380px] relative flex justify-center items-center
            bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/sub_top_bg.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40" />
            <div className="w-full h-[280px] flex flex-col justify-center items-center gap-2 absolute bottom-0 left-0">
                <h1 className="text-[44px] font-bold text-white">
                    {children}
                </h1>
                <p className="text-[18px] font-light text-gray-300">
                    인류 최대 행복 실현을 위한 끊임없는 혁신
                </p>
            </div>
        </section>
    )
};