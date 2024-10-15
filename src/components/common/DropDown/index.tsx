import { useEffect, useRef, useState } from 'react';
import './style.css';

interface DropDownProps {
    dropdownValue: string;
    setDropdownValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDown({ dropdownValue, setDropdownValue }: DropDownProps) {

    const filterRef = useRef<HTMLButtonElement>(null);

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onClickMenuOpenHandler = (e: any) => {
        e.preventDefault();
        setMenuOpen(!menuOpen)
    };

    const handleItemClick = (event: any) => {
        const selectedText = event.target.textContent;
        setDropdownValue(selectedText);
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
        <button
            ref={filterRef}
            className='dropdown_button'
            onClick={onClickMenuOpenHandler}>
            {dropdownValue}
            <div
                style={{
                    transform: (menuOpen) ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
                className='triangle' />
            {(menuOpen)
                && <ul className='option_wrapper'>
                    <li onClick={handleItemClick} className='option_button'>
                        제목
                    </li>
                    <li onClick={handleItemClick} className='option_button'>
                        내용
                    </li>
                    <li onClick={handleItemClick} className='option_button'>
                        글쓴이
                    </li>
                </ul>}
        </button>
    )
};