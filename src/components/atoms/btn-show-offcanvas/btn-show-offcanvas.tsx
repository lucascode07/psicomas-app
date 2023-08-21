'use client';

import styles from './btn-show-offcanvas.module.scss';

const BtnShowOffcanvas = () => {

    const handleShow = () => {
        const offcanvasMenu = document.querySelector('#offcanvas-menu');
        const body = document.querySelector('body');
        body?.classList.toggle('block-overflow');
        offcanvasMenu?.classList.toggle('o_offcanvas_menu--show');
    }

    return (
        <button className={styles.a_btn_show_offcanvas} onClick={handleShow}>
            <i className='icon-menu'></i>
        </button>
    )
}

export default BtnShowOffcanvas