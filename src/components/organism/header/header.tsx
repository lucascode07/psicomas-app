import Link from 'next/link';
import Image from 'next/image';
import { getHeaderData } from '@/services/contentful-queries';
import styles from './header.module.scss';
import MainNavigation from '@/components/molecules/main-navigation/main-navigation';
import BtnShowOffcanvas from '@/components/atoms/btn-show-offcanvas/btn-show-offcanvas';
import OffcanvasMenu from '../offcanvas-menu/offcanvas-menu';
import BtnToggleTheme from '@/components/atoms/btn-toggle-theme/btn-toggle-theme';

const Header = async () => {

    const { redirectLink, logo, navigationLinksCollection } = await getHeaderData();

    return (
        <>
            <header className={`${styles.o_header} main-container ${styles.main_container}`}>

                <BtnShowOffcanvas />

                <Link
                    href="/"
                    className={styles.logo_link}>
                    <Image
                        src={logo.imageFile.url}
                        alt={logo.altAttribute}
                        width={30}
                        height={30} />
                </Link>

                <MainNavigation
                    navLinks={navigationLinksCollection} />

                <div className={styles.o_header__actions}>
                    <BtnToggleTheme />
                    <Link href={redirectLink.link} className={`btn ${styles.header_link}`}>
                        {redirectLink.text}
                    </Link>
                </div>
            </header>


            <OffcanvasMenu
                redirectLink={redirectLink}
                logo={logo}
                navLinks={navigationLinksCollection} />
        </>
    )
}

export default Header