'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './offcanvas-menu.module.scss';
import { Logo, NavigationLinksCollection, RedirectLink } from '@/interfaces/header-data.interface';
import BtnToggleTheme from '@/components/atoms/btn-toggle-theme/btn-toggle-theme';

interface Props {
    redirectLink: RedirectLink
    logo: Logo
    navLinks: NavigationLinksCollection
}

const OffcanvasMenu = ({ redirectLink, logo, navLinks }: Props) => {

    const handleClose = () => {
        const body = document.querySelector('body');
        const offcanvasMenu = document.querySelector('#offcanvas-menu');
        body?.classList.toggle('block-overflow');
        offcanvasMenu?.classList.toggle('o_offcanvas_menu--show');
    }

    return (
        <div id='offcanvas-menu' className={`o_offcanvas_menu ${styles.o_offcanvas_menu}`}>
            <button className={styles.btn_close} onClick={handleClose}>
                <i className='icon-times'></i>
            </button>

            <nav className={styles.navigation_offcanvas}>
                <Link
                    href="/"
                    className={styles.logo_link_offcanvas}
                    onClick={handleClose}>
                    <Image
                        src={logo.imageFile.url}
                        alt={logo.altAttribute}
                        width={36}
                        height={36} />
                </Link>
                {
                    navLinks.items.map(link => (
                        <Link
                            key={link.text}
                            href={link.link}
                            className={styles.navigation__item}
                            onClick={handleClose}>
                            {link.text}
                        </Link>
                    ))
                }
            </nav>

            <Link
                href={redirectLink.link}
                className={`btn btn-primary ${styles.offcanvas_link}`}
                onClick={handleClose}>
                {redirectLink.text}
                <i className='icon-arrow-right'></i>
            </Link>
        </div>
    )
}

export default OffcanvasMenu