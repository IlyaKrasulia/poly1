import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import './vacancies.scss';
import './vacancies-media.scss';

import VacationModal from "../VacationModal";
import LeaveRequestModal from "../LeaveRequestModal";

import markSvg from '../../images/icons/label.svg';
import write from '../../images/icons/write.svg';


const Vacancies = ({ vacancies, setVacationModalType, setLeaveRequestType, leaveRequestType }) => {

    let plVac = vacancies.filter(it => it.country === 'pl');
    const nlVac = vacancies.filter(it => it.country === 'nl');
    const deVac = vacancies.filter(it => it.country === 'de');
    const enVac = vacancies.filter(it => it.country === 'en');
    const auVac = vacancies.filter(it => it.country === 'au');

    const { t, i18n } = useTranslation();
    const [ vacFilter, setVacFilter ] = useState(vacancies);
    const [ activeFilter, setActiveFilter ] = useState(0);
    const [ vacModal, setVacModal ] = useState(false);
    const [ leaveRequestModalVisibleVacs, setLeaveRequestModalVisileaveVacs ] = useState(false);
    const [ vacModalData, setVacModalData ] = useState({});
    const [ vacsVisible, setVacsVisible ] = useState(false)

    if(vacModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    let btns = [
        {name: t('all'), countr: vacancies},
        {name: t('pl'), countr: plVac},
        {name: t('nl'), countr: nlVac},
        {name: t('de'), countr: deVac},
        {name: t('en'), countr: enVac},
        {name: t('au'), countr: auVac},
    ];

    const changeFilter = (c, id) => {
        setVacFilter(c);
        setActiveFilter(id);
        console.log(vacFilter);
    }

    const closeModal = () => {
        setVacModal(false);
    }

    const changeModalDate = (id) => {
        setVacationModalType('vacancies');
        setVacModalData(vacancies[id]);
        setVacModal(true);
    }

    const openRequestModal = () => {
        setLeaveRequestType('vacancies');
        setLeaveRequestModalVisileaveVacs(true);
    }

    const hendleSeeAll = () => {
        setVacsVisible(!vacsVisible);
    }

    return (
        <Element name="vacancies">  
             <div className="vacancies">
        <div className="container">
                <div className="vacancies__title">{t('vacanciesTitle')}</div>
                <div className="vacancies__fillters-wrapper">
                    <div className="vacancies__fillters">
                        {btns.map((it, id) => {
                            return (
                                <button key={id} onClick={() => changeFilter(it.countr, id)} className={id===activeFilter ? 'vacancies__filters-btn--active' : 'vacancies__filters-btn'}>{it.name}</button>
                            )
                        })}
                    </div>
                </div>
                <div className="vacancies__items">
                    {vacFilter.map((it, i) => {
                        return (
                            <>
                                <div className="vacancies__item" key={i}>
                                    <img className="vacancies__item--img" src={it.img} alt="img " onClick={() => {changeModalDate(i)}}/>
                                    <div className="vacancies__item-info">
                                        <div onClick={() => {changeModalDate(i)}}>
                                            <h2 className="vacancies__item-info--title">{it.title}</h2>
                                            <div className="vacancies__item-info--dop">
                                                <h2 className="vacancies__item-info--site"><img src={markSvg} alt="mark" />{it.site}</h2>
                                                <h2 className="vacancies__item-info--salary"><span>${it.salary}</span>/{t('hours')}</h2>
                                            </div>
                                            <p className="vacancies__item-info--desc">
                                            {it.description}
                                            </p>
                                        </div>
                                        
                                        <div className="vacancies__item-info--top">
                                            <h2 className="vacancies__item-info--date">{it.date}</h2>
                                            <h3 className="vacancies__item-info--btn" onClick={openRequestModal}><img src={write} alt="ico"/>{t('respond')}</h3>
                                        </div>
                                    </div>
                                </div> 
                            </>
                            
                        )
                    }).splice(0, vacsVisible ? vacFilter.length : 8)}
                </div>
                {vacFilter.length >= 8 ? <button onClick={hendleSeeAll} className="buttonTransporent">{vacsVisible ? t('hide') : t('showMore')}</button> : ''}
            </div>
        </div>
        {leaveRequestModalVisibleVacs && <LeaveRequestModal leaveRequestType={leaveRequestType} setLeaveRequestModalVisileaveVacs={setLeaveRequestModalVisileaveVacs}/>}
        {vacModal && <VacationModal VacData={vacModalData} closeModalVacs={closeModal}/>}
        </Element>
    )
} 

export default Vacancies;