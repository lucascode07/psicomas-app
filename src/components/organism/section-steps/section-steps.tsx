import { StepsSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-steps.module.scss';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: StepsSectionCollectionItem;
}

const SectionSteps = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_steps}>
            <div className='main-container'>
                <ScrollReveal origin='top' duration={500} distance="20px">
                    <h2 className="section-title text-white">
                        {sectionData.sectionInformation.title}
                    </h2>
                    <p className={`section-description text-white ${styles.section_description}`}>
                        {sectionData.sectionInformation.description}
                    </p>
                </ScrollReveal>
                <ScrollReveal isList={true} interval={60} delay={500} className={styles.steps_grid_card}>
                    {
                        sectionData.cardsCollection.items.map((cardItem, index) => (
                            <div key={cardItem.title} className={styles.steps_grid_card__item}>
                                <div className={styles.card_number}>{index + 1}</div>
                                <h3>{cardItem.title}</h3>
                                <p>{cardItem.description}</p>
                            </div>
                        ))
                    }
                </ScrollReveal>
            </div>
        </section>
    )
}

export default SectionSteps