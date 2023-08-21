'use client';

import { useContext } from 'react';
import styles from './btn-toggle-theme.module.scss';
import { ThemeContext } from '@/context/theme-context';

const BtnToggleTheme = () => {

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={
                `btn 
                ${isDarkTheme ? 'btn-secondary' : ''}
                ${styles.a_btn_toggle_theme}`
            }
            onClick={toggleTheme}>
            {
                isDarkTheme
                    ? <i className='icon-sun'></i>
                    : <i className='icon-moon'></i>
            }
        </button>
    )
}

export default BtnToggleTheme