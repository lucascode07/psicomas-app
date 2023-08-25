'use client';

import { useState } from 'react';
import Swal from 'sweetalert2'
import styles from './forms-contact.module.scss';

const initialValues = {
    email: '',
    fullname: ''
}

const FormsContact = () => {

    const [contactFields, setContactFields] = useState(initialValues);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactFields({
            ...contactFields,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setContactFields(initialValues);
        Swal.fire({
            icon: 'success',
            title: 'Información enviada',
            text: 'Pronto nos pondremos en contacto contigo',
            background: 'var(--bg-secondary-color)',
            color: 'var(--font-main-color)',
            showConfirmButton: false,
            timer: 4000
        })
        console.log(contactFields);
    }


    return (
        <form className={styles.m_contact_forms} onSubmit={handleSubmit}>
            <div className={`form-control ${styles.form_item}`}>
                <label className='text-white' htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    required
                    onChange={handleOnChange}
                    value={contactFields.email} 
                    autoComplete='on'/>
            </div>
            <div className={`form-control ${styles.form_item}`}>
                <label className='text-white' htmlFor="fullname">Nombres completos</label>
                <input
                    type="text"
                    id='fullname'
                    name='fullname'
                    pattern='[a-zA-Z ]{2,254}'
                    onChange={handleOnChange}
                    value={contactFields.fullname} 
                    autoComplete='on'/>
            </div>
            <button
                type='submit'
                className={`btn btn-secondary ${styles.contact_submit}`}>
                Enviar datos
                <i className='icon-arrow-right'></i>
            </button>
        </form>
    )
}

export default FormsContact