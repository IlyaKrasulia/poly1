import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import './about-us.scss';
import './about-us-media.scss';

import valutPng from '../../images/icons/money-iso.png'
import rocketPng from '../../images/icons/rocket-iso-color.png'
import sheildPng from '../../images/icons/sheild-iso-color.png'
import thumbPng from '../../images/icons/thumb-up-iso-color.png'

import LeaveRequestModal from "../LeaveRequestModal";

const AboutUs = ({ setLeaveRequestType }) => {

    const [ leaveRequestModalVisible, setLeaveRequestModalVisible ] = useState(false);

    const { t, i18n } = useTranslation();

    const closeModal = () => {
        setLeaveRequestModalVisible(false);
    }

    const openModal = () => {
        setLeaveRequestType('aboutUs');
        setLeaveRequestModalVisible(true);
    }

    return(
        <Element name="aboutUs">
            {leaveRequestModalVisible && <LeaveRequestModal closeModalAboutUs={closeModal}/>}
        <div className="container">
            <div className="about-us">
                <div className="about-us__info">
                    <h1 className="about-us__info-title">{t('aboutUsTitle')} <span>{t('aboutUsTitleSpan')}</span></h1>
                    <h2 className="about-us__info-subtitle">{t('aboutUsSubtitle')}</h2>
                    <p className="about-us__info-description">{t('aboutUsDescription')}</p>
                    <button onClick={openModal} className="buttonTransporent">{t('aboutUsGetConsultation')}</button>
                </div>
                <div className="about-us__cards">
                    <div className="about-us__cards-card item-1" style={{backgroundColor: 'rgba(140, 218, 243, 0.8)'}}>
                        <img src={valutPng} alt="dollar" />
                        <h3 className="about-us__cards-card--title">{t('aboutUsCard1Title')}</h3>
                        <p className="about-us__cards-card--info">{t('aboutUsCard1Description')}</p>
                    </div>
                    <div className="about-us__cards-card item-2" style={{backgroundColor: 'rgba(254, 236, 132, 0.58)'}}>
                        <img src={rocketPng} alt="rocket" />
                        <h3 className="about-us__cards-card--title">{t('aboutUsCard2Title')}</h3>
                        <p className="about-us__cards-card--info">{t('aboutUsCard2Description')}</p>
                    </div>
                    <div className="about-us__cards-card item-3" style={{backgroundColor: '#FDE0E3'}}>
                        <img src={thumbPng} alt="dollar" />
                        <h3 className="about-us__cards-card--title">{t('aboutUsCard3Title')}</h3>
                        <p className="about-us__cards-card--info">{t('aboutUsCard3Description')}</p>
                    </div>
                    <div className="about-us__cards-card item-4" style={{backgroundColor: '#F5F7F8'}}>
                        <img src={sheildPng} alt="dollar" />
                        <h3 className="about-us__cards-card--title">{t('aboutUsCard4Title')}</h3>
                        <p className="about-us__cards-card--info">{t('aboutUsCard4Description')}</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
}

export default AboutUs;