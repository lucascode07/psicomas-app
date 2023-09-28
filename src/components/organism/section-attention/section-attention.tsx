/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';
import { AttentionSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-attention.module.scss';
import ScrollReveal from '@/utils/scroll-reveal';

interface Props {
    sectionData: AttentionSectionCollectionItem;
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <><br /><strong>{text}</strong></>,
    }
};

const SectionAttention = ({ sectionData }: Props) => {
    return (
        <section className={styles.o_section_attention} id={sectionData.sectionInformation.htmlId}>
            <div className={styles.section_shape}></div>
            <div className='main-container'>
                <ScrollReveal origin='top' duration={500} distance="20px">
                    <h2 className="section-title">
                        {sectionData.sectionInformation.title}
                    </h2>
                    <p className={`section-description ${styles.section_description}`}>
                        {sectionData.sectionInformation.description}
                    </p>
                </ScrollReveal>
                <div className={styles.section_container}>
                    <ScrollReveal origin='right' duration={500}>
                        <div className={styles.specialties_group}>
                            {
                                sectionData.specialitiesCollection.items.map(specialty => (
                                    <div key={specialty.image.altAttribute} className={styles.specialties_group__item}>
                                        <img
                                            src={specialty.image.imageFile.url}
                                            alt={specialty.image.altAttribute}
                                            width='auto'
                                            height={120}
                                        />
                                        {documentToReactComponents(specialty.text.json, options)}
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollReveal>
                    <ScrollReveal origin='left' duration={500}>
                        <div className={styles.section_main_image}>
                            <img
                                src={sectionData.image.imageFile.url}
                                alt={sectionData.image.altAttribute}
                                width={sectionData.image.imageFile.width}
                                height={sectionData.image.imageFile.height}
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
            <div className={styles.section_shape_2}></div>
        </section>
    )
}

export default SectionAttention