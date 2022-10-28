import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';


import modalBg from '../../images/leave-request-model-bg.jpg'
import closeModal from '../../images/icons/close-modal.svg';

import './leaveRequestModal.scss';
import './leaveRequestModal-media.scss';

const LeaveRequestModal = ({ modalCloseHeader, closeModalAboutUs, leaveRequestType, leaveRequestModalCloseVacs }) => {   
    const { t, i18n } = useTranslation();

    const [ phoneInput, setPhoneInput ] = useState('')

    const modalClose = () => {
        if(leaveRequestType==='header') {
            return modalCloseHeader()
        }  else if(leaveRequestType==='aboutUs') {
            return closeModalAboutUs()
        } else {
            return leaveRequestModalCloseVacs()
        }
    }  
    
    const Validate = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Required'),
          phone: Yup.number()
          .required('Required')
          .min(16, 'Too Short!')
          .max(18, 'Too Long!')
      });


    return (
        <div className="modal-wrapper" onClick={e => (e.currentTarget === e.target) && modalClose()}>
            <div className="leave-request">
            
            <div className="modal__content-wrapper">
                <button className="modal-close" onClick={modalClose}><img className="close-modal" src={closeModal} alt="close modal" /></button>
                <div className="modal__content">
                    <h1>{t('leaveRequestModalTitle')}</h1>
                    <p>{t('leaveRequestModalSubtitle')}</p>
            <Formik
                initialValues={{ name: '', phone: '' }}
                validationSchema={Validate}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, phoneInput, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}>
            
                <Form>
                    <Field name="name" type="text" placeholder={t('leaveRequestModalPlaceholderName')}/>
                    <ErrorMessage name="name" component="div" />
                    {/* <Field name="phone" type="text" placeholder={t('leaveRequestModalTitlePlaceholderPhone')}/> */}
                    <InputMask onChange={e => setPhoneInput(e.target.value)} type="text" placeholder={t('phone')} mask="+38\0 99 999 99 99"/>
                    <ErrorMessage name="phone" component="div" />
                    <button type="submit">{t('leaveRequest')}</button>
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