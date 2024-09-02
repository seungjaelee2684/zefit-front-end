import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";

export default function Notice() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center gap-24">
                <PageBanner>시스템</PageBanner>
                <section className="w-">

                </section>
            </article>
        </main>
    )
};