interface TestNavModalProps {
    navModalRef: React.RefObject<HTMLUListElement>;
    navValue: {
        id: string,
        href: string,
        list: {
            id: string,
            href: string
        }[] | undefined
    }[] | undefined;
};

export default function TestNavModal({ navModalRef, navValue }: TestNavModalProps) {
    return (
        <ul className="fixed top-[100px] left-0 z-20 bg-white bg-opacity-90 shadow-md w-[100%] h-[200px]
            ">

        </ul>
    )
};