import { ProfessionalsSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-professionals.module.scss';
import Link from 'next/link';
import CardProfessional from '@/components/molecules/card-professional/card-professional';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: ProfessionalsSectionCollectionItem;
}

const SectionProfessionals = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_pro} id={sectionData.sectionInformation.htmlId}>
            <div className='main-container'>
                <ScrollReveal origin='top' duration={500} distance="20px">
                    <h2 className="section-title text-white">
                        {sectionData.sectionInformation.title}
                    </h2>
                    <p className={`section-description text-white ${styles.section_description}`}>
                        {sectionData.sectionInformation.description}
                    </p>
                </ScrollReveal>
                <Link className={`btn btn-secondary ${styles.section_link}`} href={sectionData.redirectLink.link}>
                    {sectionData.redirectLink.text}
                    <i className='icon-arrow-right'></i>
                </Link>
                <ScrollReveal isList={true} interval={60} delay={500} className={styles.card_grid}>
                    <CardProfessional />
                    <CardProfessional />
                    <CardProfessional />
                </ScrollReveal>
            </div>
            <div className={styles.section_shape}></div>
        </section>
    )
}

export default SectionProfessionals