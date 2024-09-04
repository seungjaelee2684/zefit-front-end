interface CenterContentProps {
    title1: string;
    title2: string;
};

export default function CenterContent({ title1, title2 }: CenterContentProps) {
    return (
        <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-8">
            <div className="w-[80%] flex flex-col justify-center items-center gap-4">
                <h2  className="text-[24px] text-zefit-normal">
                    {title1}
                </h2>
                <p className="text-[18px] text-[#444444]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="w-[80%] flex flex-col justify-center items-center gap-4">
                <h2  className="text-[24px] text-zefit-normal">
                    {title2}
                </h2>
                <p className="text-[18px] text-[#444444]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    )
};