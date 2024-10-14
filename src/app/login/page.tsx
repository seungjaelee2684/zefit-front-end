'use client';

import { useState } from 'react';
import './style.css';
import MetaTagTitle from '@/utils/MetaTagTitle';

export default function Login() {

    const [autoLogin, setAutoLogin] = useState<boolean>(false);

    const onClickAutoLoginHandler = (e: any) => {
        e.preventDefault();
        if (!autoLogin) {
            const result = confirm('예?');
            if (result) setAutoLogin(true);
        } else {
            setAutoLogin(false);
        };
    };

    return (
        <article className='login_layout'>
            <MetaTagTitle title='로그인' />
            <a
                href='/'
                className='login_logo_box'>
                <img
                    className='login_logo'
                    src='http://www.zefit.co.kr/theme/basic/assets/images/logo-dark.png' />
            </a>
            <form className='login_form_container'>
                <h1 className='login_form_title'>
                    관리자 로그인
                </h1>
                <fieldset className='login_field'>
                    <label className='login_input_label'>
                        <input
                            className='login_input'
                            placeholder='아이디'
                            required />
                    </label>
                    <label className='login_input_label'>
                        <input
                            className='login_input'
                            placeholder='비밀번호'
                            required />
                    </label>
                    <button
                        className='login_button'>
                        로그인
                    </button>
                    <div className='auto_login_wrapper'>
                        <button
                            onClick={onClickAutoLoginHandler}
                            className='auto_login_button'>
                            <i
                                style={{
                                    backgroundColor: (autoLogin) ? '#3a8afd' : '#fff',
                                    color: (autoLogin) ? '#fff' : 'inherif'
                                }}
                                className='auto_login_checkbox'>
                                {(autoLogin) && '✔'}
                            </i>
                            자동로그인
                        </button>
                    </div>
                </fieldset>
            </form>
        </article>
    )
};