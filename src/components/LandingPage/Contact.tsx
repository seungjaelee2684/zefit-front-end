export default function Contact() {
    return (
        <section className="w-full h-[500px] bg-gray-300 relative
            bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/main_bg.jpg')] bg-no-repeat bg-cover">
            <div className="w-full h-full bg-black bg-opacity-40" />
            <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                <div className="w-full h-full flex flex-col justify-start items-start gap-6 text-white px-[15%] py-20">
                    <h3 className="text-[40px] font-bold">문의하기</h3>
                    <p className="text-[28px] font-semibold">
                        혁신을 향한 끊임없는 발전, ZEFIT과 함께하세요
                    </p>
                    <div>
                        전화번호
                    </div>
                    <div>
                        주소
                    </div>
                    <div>
                        이메일
                    </div>
                </div>
                <div className="min-w-[400px] h-full flex flex-col">
                    <a
                        href="/content/contact"
                        className="w-full h-full border-l border-b border-white cursor-pointer flex flex-col justify-center items-center gap-4
                        text-white text-[18px] hover:bg-zefit-hover hover:bg-opacity-50 hover:border-white transition-all">
                        오시는 길
                        <span>→</span>
                    </a>
                    <a
                        href="/contact"
                        className="w-full h-full border-l border-white cursor-pointer flex flex-col justify-center items-center gap-4
                        text-white text-[18px] hover:bg-zefit-hover hover:bg-opacity-50 hover:border-white transition-all">
                        문의하기
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    )
};