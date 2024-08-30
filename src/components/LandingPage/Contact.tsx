export default function Contact() {
    return (
        <section className="w-full h-[400px] bg-gray-300 relative
            bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_bg.jpg')] bg-no-repeat bg-cover">
            <div className="w-full h-full bg-black bg-opacity-30" />
            <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <h3 className="text-white text-[40px] font-bold">문의하기</h3>
                    <div className="text-white text-[28px] font-semibold">
                        혁신을 향한 끊임없는 발전, ZEFIT과 함께하세요
                    </div>
                </div>
                <a
                    href="/contact"
                    className="w-[140px] h-[48px] border border-white cursor-pointer flex justify-center items-center
                    text-white text-[18px] hover:bg-white hover:border-white hover:text-black transition-all rounded-full">
                    문의하기
                </a>
            </div>
        </section>
    )
};