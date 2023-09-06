import { CardsCollectionItem } from '@/interfaces/home-data.interface';
import styles from './card.module.scss';

interface Props {
    cardData: CardsCollectionItem
}

const Card = ({ cardData }: Props) => {
    return (
        <div className={styles.m_card}>
            <div className={styles.card_icon}>
                <i className={cardData.iconClass}></i>
            </div>
            <h3>{cardData.title}</h3>
            <p>{cardData.description}</p>
        </div>
    )
}

export default Card