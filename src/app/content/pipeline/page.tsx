import PageBanner from "@/components/common/PageBanner";
import PageHeader from "@/components/common/PageHeader";
import PageTap from "@/components/common/PageTap";
import ZContent from "@/components/common/ZContent";

export default function PipeLine() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between mb-[102px]">
            <PageHeader />
            <article className="w-full flex min-h-screen flex-col justify-start items-center">
                <PageBanner>신약개발기술</PageBanner>
                <PageTap value={2} />
                <ZContent />
            </article>
        </main>
    )
};