export default function Contact() {
    return (
        <section className="w-full h-[350px] bg-gray-300 relative
            bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_bg.jpg')] bg-no-repeat bg-cover">
            <div className="w-full h-full bg-black bg-opacity-40" />
            <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 gap-10">
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                    <h3 className="text-[40px] font-bold">문의하기</h3>
                    <p className="text-[28px] font-semibold">
                        혁신을 향한 끊임없는 발전, ZEFIT과 함께하세요
                    </p>
                </div>
                <a
                    href="/contact"
                    className="w-[180px] h-[54px] border border-white cursor-pointer flex justify-center items-center gap-4 rounded-full
                    text-white text-[18px] hover:bg-zefit-hover hover:border-zefit-hover hover:bg-opacity-50 transition-all">
                    문의하기
                    <span>→</span>
                </a>
            </div>
        </section>
    )
};