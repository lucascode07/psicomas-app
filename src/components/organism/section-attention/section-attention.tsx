/* eslint-disable @next/next/no-img-element */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';
import { AttentionSectionCollectionItem } from '@/interfaces/home-data.interface';
import styles from './section-attention.module.scss';

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
        <section className={styles.o_section_attention}>
            <div className={styles.section_shape}></div>
            <div className='main-container'>
                <h2 className="section-title">
                    {sectionData.sectionInformation.title}
                </h2>
                <p className={`section-description ${styles.section_description}`}>
                    {sectionData.sectionInformation.description}
                </p>
                <div className={styles.section_container}>
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
                    <div className={styles.section_main_image}>
                        <img
                            src={sectionData.image.imageFile.url}
                            alt={sectionData.image.altAttribute}
                            width={sectionData.image.imageFile.width}
                            height={sectionData.image.imageFile.height}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.section_shape_2}></div>
        </section>
    )
}

export default SectionAttention