import { ProfessionalsSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-professionals.module.scss';
import Link from 'next/link';
import CardProfessional from '@/components/molecules/card-professional/card-professional';

interface Props {
    sectionData: ProfessionalsSectionCollectionItem;
}

const SectionProfessionals = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_pro} id={sectionData.sectionInformation.htmlId}>
            <div className='main-container'>
                <h2 className="section-title text-white">
                    {sectionData.sectionInformation.title}
                </h2>
                <p className={`section-description text-white ${styles.section_description}`}>
                    {sectionData.sectionInformation.description}
                </p>
                <Link className={`btn btn-secondary ${styles.section_link}`} href={sectionData.redirectLink.link}>
                    {sectionData.redirectLink.text}
                    <i className='icon-arrow-right'></i>
                </Link>
                <div className={styles.card_grid}>
                    <CardProfessional />
                    <CardProfessional />
                    <CardProfessional />
                </div>
            </div>
        </section>
    )
}

export default SectionProfessionals