export default function Footer() {
    return (
        <footer className="w-full h-[250px] bg-white flex justify-center items-center relative">
            <div className="w-full h-[33px] absolute top-[-33px] left-0 z-[2] animate-custom-wave-move bg-opacity-30
                bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/wave.png')]" />
            <div className="w-full h-[33px] absolute top-[-33px] left-0 z-[3] animate-custom-wave-move
                bg-[url('http://www.zefit.co.kr/theme/basic/assets/images/zefit/wave.png')]" />
        </footer>
    )
};