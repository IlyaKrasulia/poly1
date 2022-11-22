import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import InputMask from 'react-input-mask';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContactForm } from '../../hooks/useContactForm' 


import footerImg from '../../images/footer-img.png'
import phoneNumSvg from '../../images/icons/u_phone-alt.svg'
import mailSvg from '../../images/icons/u_envelope.svg'
import markSvg from '../../images/icons/u_map-marker.svg'
import telegramSvg from '../../images/icons/u_telegram-alt.svg'
import phoneSvg from '../../images/icons/phone.svg'
import instagramSvg from '../../images/icons/u_instagram.svg'

import './footer.scss';
import './footer-media.scss';

const Footer = () => {

    const { name, phone, isSending, success, error, onSubmissingForm, onChangeName, onChangePhone } = useContactForm()
    const [ phoneInput, setPhoneInput ] = useState('')
    const { t, i18n } = useTranslation();

    const Validate = Yup.object().shape({
          phone: Yup.number()
          .required('Required')
          .min(17, 'Too Short!')
          .max(17, 'Too Long!')
      });

    return (
        <Element name="footer">
             <div className="footer">
            <div className="container">
                <div className="footer__info">
                    <h1 className="footer__info-title">{t('footerTitle')}</h1>
                    <h3 className="footer__info-phone"><img src={phoneNumSvg} alt="icon"/>+380987398123</h3>
                    <h3 className="footer__info-mail"><img src={mailSvg} alt="icon"/>polypoly@gmail.com</h3>
                    <h3 className="footer__info-site"><img src={markSvg} alt="icon"/>{t('adress')}</h3>
                    <Formik
                        initialValues={{phone: ''}}
                        // validationSchema={Validate}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(phoneInput);
                              setSubmitting(false);
                            }, 400);
                          }}
                    >
                        <Form onSubmit={onSubmissingForm} className="footer__info-form">
                            <InputMask 
                                type="text" 
                                placeholder={t('phone')} 
                                mask="+38\0 99 999 99 99"
                                value={phone}
                                name="user_phone"
                                onChange={onChangePhone}
                                required
                            />
                            <ErrorMessage name="phone" component="div" />
                            <button type="submit">{t('callMe')}</button>
                        </Form>
                    </Formik>
                    
                    <div className="footer__info-connection">
                        <h2>{t('footerContactsTitle')}</h2>
                        <h3>{t('footerContactsSubtitle')}</h3>
                        <img src={telegramSvg} alt="telegram"/>
                        <img src={phoneSvg} alt="phone"/>
                        <img src={instagramSvg} alt="instagram"/>
                    </div>
                    
                </div>
                <img src={footerImg} alt="Footer img" className="footer__img"/>

                
            </div>
        </div>
        </Element>
    )
}

export default Footer;