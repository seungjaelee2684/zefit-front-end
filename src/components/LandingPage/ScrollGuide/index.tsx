import './style.css';

export default function ScrollGuide() {
    return (
        <span className="top_banner_scroll_guide">
            <div className='scroll_guide_text'>
                아래로 스크롤
            </div>
            <div className='scroll_guide_arrow_box'>
                <i className='icon-arrow-down'></i>
                <i className='icon-arrow-down'></i>
            </div>
        </span>
    )
};