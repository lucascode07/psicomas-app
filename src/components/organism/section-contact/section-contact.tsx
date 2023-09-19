import { ContactSectionCollectionItem } from '@/interfaces/footer-data.interface';
import styles from './section-contact.module.scss';
import FormsContact from '@/components/molecules/forms-contact/forms-contact';

interface Props {
  contactContent: ContactSectionCollectionItem;
}

const SectionContact = ({ contactContent }: Props) => {
  return (
    <section className={styles.o_section_contact} id={contactContent.sectionInformation.htmlId}>
      <h2 className={`section-title text-white ${styles.contact_title}`}>
        {contactContent.sectionInformation.title}
      </h2>
      <p className={`section-description text-white ${styles.contact_description}`}>
        {contactContent.sectionInformation.description}
      </p>
      <FormsContact />
    </section>
  )
}

export default SectionContact