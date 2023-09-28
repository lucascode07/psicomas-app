import Link from 'next/link';
import Image from 'next/image';
import { MainSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './main-section.module.scss';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: MainSectionCollectionItem;
}

const MainSection = async ({ sectionData }: Props) => {

    const { sectionInformation, redirectLink, image } = sectionData;

    return (
        <section className={styles.o_main_section}>
            <div className={`main-container ${styles.main_container}`}>
                <ScrollReveal origin='right' duration={500}>
                    <div className={styles.section_texts}>
                        <h1 className={`main-title ${styles.section_title}`}>{sectionInformation.title}</h1>
                        <p className={`section-description ${styles.section_description}`}>
                            {sectionInformation.description}
                        </p>
                        <Link
                            className={`btn btn-primary ${styles.section_link}`}
                            href={redirectLink.link}>
                            {redirectLink.text}
                            <i className='icon-arrow-right'></i>
                        </Link>
                    </div>
                </ScrollReveal>
                <ScrollReveal origin='left' duration={500}>
                    <div className={styles.section_image}>
                        <Image
                            src={image.imageFile.url}
                            alt={image.altAttribute}
                            width={image.imageFile.width}
                            height={image.imageFile.height} />
                    </div>
                </ScrollReveal>
            </div>
            <div className={styles.section_advice}>
                <i className='icon-mouse'></i>
                <small>Desliza para conocer más</small>
            </div>
        </section>
    )
}

export default MainSection