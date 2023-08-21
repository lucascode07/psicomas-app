import Link from 'next/link';
import { NavigationLinksCollection } from '@/interfaces/header-data.interface';
import styles from './main-navigation.module.scss';

interface Props {
    navLinks: NavigationLinksCollection
}

const MainNavigation = ({ navLinks }: Props) => {
    return (
        <nav className={styles.navigation}>
            {
                navLinks.items.map(link => (
                    <Link key={link.text} href={link.link} className={styles.navigation__item}>
                        {link.text}
                    </Link>
                ))
            }
        </nav>
    )
}

export default MainNavigation