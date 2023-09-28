import { ServicesSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-services.module.scss';
import Card from '@/components/molecules/card/card';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: ServicesSectionCollectionItem
}

const ServicesSection = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_services} id={sectionData.sectionInformation.htmlId}>
            <div className='main-container p-relative'>
                <div className={styles.section_shape}></div>
                <ScrollReveal origin='top' duration={500} distance="20px">
                    <h2 className="section-title">
                        {sectionData.sectionInformation.title}
                    </h2>
                    <p className="section-description">
                        {sectionData.sectionInformation.description}
                    </p>
                </ScrollReveal>
                <ScrollReveal isList={true} interval={60} delay={500} className={styles.cards_grid}>
                    {
                        sectionData.cardsCollection.items.map(card => (
                            <Card
                                key={card.iconClass}
                                cardData={card} />
                        ))
                    }
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ServicesSection