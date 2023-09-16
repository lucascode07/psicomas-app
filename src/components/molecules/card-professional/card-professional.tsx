import Link from 'next/link';
import styles from './card-professional.module.scss';
import Image from 'next/image';

const CardProfessional = () => {
    return (
        <div className={styles.m_card_professional}>
            <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" 
                alt="imagen de"
                width={126}
                height={126} />
            <p>Ana Villa González</p>
            <small>Cedula 93279</small>
            <p>Psicología, Sexualidad Conflictos personales,Terapia de pareja</p>
            <Link href={'#'}>
                Ver perfil completo
                <i className='icon-arrow-right'></i>
            </Link>
        </div>
    )
}

export default CardProfessional