import { useEffect, useRef, useState } from 'react';
import './style.css';

interface DropDownProps {
    dropdownValue: {
        title: string,
        value: string
    };
    setDropdownValue: React.Dispatch<React.SetStateAction<{
        title: string,
        value: string
    }>>;
    isEnglish?: boolean;
}

export default function DropDown({ dropdownValue, setDropdownValue, isEnglish = false }: DropDownProps) {

    const filterRef = useRef<HTMLDivElement>(null);

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onClickMenuOpenHandler = (e: any) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const handleItemClick = (event: any, option: string) => {
        const selectedText = event.target.textContent;

        if (isEnglish) {
            setDropdownValue({ ...dropdownValue, title: selectedText, value: `${option}_en` });
        } else {
            setDropdownValue({ ...dropdownValue, title: selectedText, value: `${option}_kr` });
        }

        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={filterRef}
            className='dropdown_button'
            onClick={onClickMenuOpenHandler}>
            {dropdownValue?.title}
            <div
                style={{
                    transform: (menuOpen) ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
                className='triangle' />
            {(menuOpen)
                && <ul className='option_wrapper'>
                    <li onClick={(e) => handleItemClick(e, 'title')} className='option_button'>
                        {(isEnglish) ? 'Title' : '제목'}
                    </li>
                    <li onClick={(e) => handleItemClick(e, 'content')} className='option_button'>
                        {(isEnglish) ? 'Content' : '내용'}
                    </li>
                    <li onClick={(e) => handleItemClick(e, 'writer')} className='option_button'>
                        {(isEnglish) ? 'Writer' : '글쓴이'}
                    </li>
                </ul>}
        </div>
    )
};