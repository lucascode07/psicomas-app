import styles from './section-plan.module.scss';
import { PaymentPlanSectionCollectionItem } from '../../../interfaces/home-data.interface';
import Link from 'next/link';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: PaymentPlanSectionCollectionItem;
}

const SectionPlan = ({ sectionData }: Props) => {

    console.log(sectionData.sectionInformation.htmlId);

    return (
        <section className={styles.o_section_plan} id={sectionData.sectionInformation.htmlId}>
            <ScrollReveal origin='top' duration={500} distance="20px">
                <h2 className="section-title">
                    {sectionData.sectionInformation.title}
                </h2>
                <p className={`section-description ${styles.section_description}`}>
                    {sectionData.sectionInformation.description}
                </p>
            </ScrollReveal>
            <div className={`main-container ${styles.section_container}`}>
                <div className={styles.section_shape}></div>
                <ScrollReveal origin='top' duration={500} distance="20px" delay={500}>
                    <div className={styles.card_promo}>
                        <div className={styles.card_promo__heading}>
                            <h3>Promoción</h3>
                            <h4>
                                <sup>S/.</sup>
                                {sectionData.price}
                            </h4>
                            <small>{sectionData.shortMessage}</small>
                        </div>
                        <ul>
                            {
                                sectionData.benefits.map(item => (
                                    <li key={item}>
                                        <span></span>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <Link
                            href={sectionData.redirectLink.link}
                            type='button'
                            className={`btn btn-primary ${styles.btn_redirect}`}>
                            {sectionData.redirectLink.text}
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default SectionPlan