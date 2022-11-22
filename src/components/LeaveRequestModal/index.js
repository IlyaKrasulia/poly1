import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { useContactForm } from '../../hooks/useContactForm' 


import modalBg from '../../images/leave-request-model-bg.jpg'
import closeModal from '../../images/icons/close-modal.svg';

import './leaveRequestModal.scss';
import './leaveRequestModal-media.scss';

const LeaveRequestModal = ({leaveRequestType, setLeaveRequestModalVisibleHeader, setLeaveRequestModalVisibleAboutUs, setLeaveRequestModalVisileaveVacs }) => {   
    const { t, i18n } = useTranslation();

    // const [ phoneInput, setPhoneInput ] = useState('')
    const { name, phone, isSending, success, error, onSubmissingForm, onChangeName, onChangePhone } = useContactForm()

    const modalClose = () => {
        if(leaveRequestType==='header') {
            setLeaveRequestModalVisibleHeader(false);
        }  else if(leaveRequestType==='aboutUs') {
            setLeaveRequestModalVisibleAboutUs(false);
        } else if(leaveRequestType==='vacancies') {
            setLeaveRequestModalVisileaveVacs(false);
        }

    }  
    
    // const Validate = Yup.object().shape({
    //     name: Yup.string()
    //       .min(2, 'Too Short!')
    //       .max(10, 'Too Long!')
    //       .required('Required'),
    //       phone: Yup.number()
    //       .required('Required')
    //       .min(16, 'Too Short!')
    //       .max(18, 'Too Long!')
    //   });


    return (
        <div className="modal-wrapper" onClick={e => (e.currentTarget === e.target) && modalClose()}>
            <div className="leave-request">
            
            <div className="modal__content-wrapper">
                <button className="modal-close" onClick={modalClose}><img className="close-modal" src={closeModal} alt="close modal" /></button>
                <div className="modal__content">
                    <h1>{t('leaveRequestModalTitle')}</h1>
                    <p>{t('leaveRequestModalSubtitle')}</p>
            <Formik
                initialValues={{ user_name: '', phone: '' }}
                >
            
                <Form onSubmit={onSubmissingForm}>
                    <Field 
                        value={name}
                        name="user_name" 
                        type="text" 
                        placeholder={t('leaveRequestModalPlaceholderName')}
                        onChange={onChangeName}
                        required
                    />
                    <InputMask 
                        value={phone}
                        name="user_phone"
                        className="form__input" 
                        onChange={onChangePhone} 
                        type="text" placeholder={t('phone')} 
                        mask="+38\0 99 999 99 99"
                        required
                    />
                    <button type="submit">{t('leaveRequest')}</button>
                    {error && (
                    <div className="form__inputs error">
                        <h4>Произошла ошибка, повторите попытку позже или позвоните нам..</h4>
                    </div>
                    )}

                    {isSending && (
                        <div className="form__inputs success">
                        <h4>Идет отправка...</h4>
                        </div>
                    )}

                    {success && (
                        <div className="form__inputs success">
                        <h4>Ваша заявка успешно отправлена!</h4>
                        </div>
                    )}
                </Form>
            </Formik>
                </div>
                </div>
                <img className="modal-bg" src={modalBg} alt="modal bg"/>
            </div>
        </div>
        
    )
}

export default LeaveRequestModal;