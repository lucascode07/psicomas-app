import { StepsSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-steps.module.scss';

interface Props {
    sectionData: StepsSectionCollectionItem;
}

const SectionSteps = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_steps}>
            <div className='main-container'>
                <h2 className="section-title text-white">
                    {sectionData.sectionInformation.title}
                </h2>
                <p className={`section-description text-white ${styles.section_description}`}>
                    {sectionData.sectionInformation.description}
                </p>
                <div className={styles.steps_grid_card}>
                    {
                        sectionData.cardsCollection.items.map((cardItem, index) => (
                            <div key={cardItem.title} className={styles.steps_grid_card__item}>
                                <div className={styles.card_number}>{index + 1}</div>
                                <h3>{cardItem.title}</h3>
                                <p>{cardItem.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionSteps