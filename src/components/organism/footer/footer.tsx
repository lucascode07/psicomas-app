import { getFooterData } from '@/services/contentful-queries';
import styles from './footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import SectionContact from '../section-contact/section-contact';

const Footer = async () => {

    const { contactContent, footerContent } = await getFooterData();

    const { logoAlternativo, slogan, linksCollection, contactInformation } = footerContent;

    return (
        <footer className={styles.o_footer}>
            <SectionContact contactContent={contactContent} />
            <section className={`main-container ${styles.section_footer}`}>
                <div className={styles.brand_info}>
                    <div className={styles.brand_info__logo}>
                        <Image
                            src={logoAlternativo.imageFile.url}
                            alt={logoAlternativo.altAttribute}
                            width={logoAlternativo.imageFile.width}
                            height={logoAlternativo.imageFile.height} />
                        <p className={`text-white ${styles.logo_text}`}>Psicomás</p>
                    </div>
                    <small className={`${styles.brand_info__slogan}`}>{slogan}</small>
                </div>
                <div className={styles.link_list}>
                    <p className={styles.link_list__title}>Acerca de</p>
                    <ul>
                        {
                            linksCollection.items.map(linkItem => (
                                <li key={linkItem.text} className={styles.link_list__item}>
                                    <Link href={linkItem.link}>
                                        {linkItem.text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.link_list}>
                    <p className={styles.link_list__title}>Contacto</p>
                    <ul>
                        <li className={`${styles.link_list__item} ${styles['link_list__item--icon']}`}>
                            <i className='icon-location-mark'></i>
                            <p>{contactInformation[0]}</p>
                        </li>
                        <li className={`${styles.link_list__item} ${styles['link_list__item--icon']}`}>
                            <i className='icon-phone'></i>
                            <p>{contactInformation[1]}</p>
                        </li>
                        <li className={`${styles.link_list__item} ${styles['link_list__item--icon']}`}>
                            <i className='icon-mail'></i>
                            <p>{contactInformation[2]}</p>
                        </li>
                    </ul>
                </div>
            </section>
            <small className={styles.footer__copyright}>Powered by Lucas Barrenechea 2023</small>
        </footer>
    )
}

export default Footer