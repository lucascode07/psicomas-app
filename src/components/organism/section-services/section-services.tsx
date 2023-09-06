import { ServicesSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-services.module.scss';
import Card from '@/components/molecules/card/card';

interface Props {
    sectionData: ServicesSectionCollectionItem
}

const ServicesSection = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_services}>
            <div className='main-container p-relative'>
                <div className={styles.section_shape}></div>
                <h2 className="section-title">
                    {sectionData.sectionInformation.title}
                </h2>
                <p className="section-description">
                    {sectionData.sectionInformation.description}
                </p>
                <div className={styles.cards_grid}>
                    {
                        sectionData.cardsCollection.items.map(card => (
                            <Card
                                key={card.iconClass}
                                cardData={card} />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default ServicesSection