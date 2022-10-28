import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import TutorialCard from "./TutorialCard";

import './tutorial.scss';
import './tutorial-media.scss';

import womanPng from '../../images/icons/woman.png'
import airplanePng from '../../images/icons/airplane.png'
import briefcasePng from '../../images/icons/briefcase.png'
import speechPng from '../../images/icons/speech.png'

const Tutorial = () => {
    const { t, i18n } = useTranslation();

    return (
        <Element name="tutorial">
            <div className="container">
            <div className="tutorial">
                <h1 className="tutorial__title">{t('tutorialTitle')}</h1>
                <div className="tutorial__cards">
                    <TutorialCard 
                    img={womanPng}
                    title={t('tutorialCard1Title')}
                    desc={t('tutorialCard1Description')}/>
                    <TutorialCard 
                    img={speechPng}
                    title={t('tutorialCard2Title')}
                    desc={t('tutorialCard2Description')}/>
                    <TutorialCard 
                    img={briefcasePng}
                    title={t('tutorialCard3Title')}
                    desc={t('tutorialCard3Description')}/>
                    <TutorialCard 
                    img={airplanePng}
                    title={t('tutorialCard4Title')}
                    desc={t('tutorialCard4Description')}/>
                </div>
            </div>   
            </div>
        </Element>
    )
}

export default Tutorial;