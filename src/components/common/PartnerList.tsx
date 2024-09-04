interface PartnerListProps {
    isOne?: boolean;
};

export default function PartnerList({ isOne = true }: PartnerListProps) {
    return (
        <section className="w-full h-fit py-4 flex flex-col justify-center items-center gap-10">
            <h3 className={(isOne) ? "w-[94%] web:w-[1170px] text-[32px] font-semibold" : "text-[32px] font-semibold"}>
                PARTNER
            </h3>
            <div className="w-full h-[150px] py-4 overflow-x-hidden">
                <ul className="w-fit h-full flex justify-start items-center gap-12 animate-custom-slide-left">
                    <li className="min-w-[180px] h-[80px] bg-gray-300 flex justify-center items-center">
                        계명대학교
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-400 flex justify-center items-center">
                        영남대학교
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-500 flex justify-center items-center">
                        경북대학교
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-300 flex justify-center items-center">
                        대구대학교
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-400 flex justify-center items-center">
                        대구가톨릭
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-500 flex justify-center items-center">
                        영진전문대학
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-300 flex justify-center items-center">
                        폴리텍
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-400 flex justify-center items-center">
                        영남대학교
                    </li>
                    <li className="min-w-[180px] h-[80px] bg-gray-500 flex justify-center items-center">
                        경북대학교
                    </li>
                </ul>
            </div>
        </section>
    )
};