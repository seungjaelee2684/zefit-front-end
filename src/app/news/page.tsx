import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function News() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>보도자료</PageBanner>
                <section className="w-[94%] web:w-[1170px] flex flex-col justify-center items-center gap-4">
                    <div className="w-full flex justify-end items-center gap-3">
                        <a href="/notice">공지사항</a>
                        <a href="/news">보도자료</a>
                    </div>
                    <div className="w-full h-[80px] bg-gray-300" />
                    <div className="w-full h-[80px] bg-gray-300" />
                    <div className="w-full h-[80px] bg-gray-300" />
                    <div className="w-full h-[80px] bg-gray-300" />
                    <div className="w-full h-[80px] bg-gray-300" />
                    <div className="w-full h-[80px] bg-gray-300" />
                </section>
            </article>
        </main>
    )
};