import { useEffect } from "react";

export default function ScrollAmount() {

    const scrollHeight = document.documentElement.scrollHeight;
    console.log('scrollHeight: ', scrollHeight);

    useEffect(() => {

    }, []);

    return (
        <section className="w-4 h-32 flex flex-col fixed top-1/2 right-2 z-20 bg-gray-200">
            100%
        </section>
    )
};