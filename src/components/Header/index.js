import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import LeaveRequestModal from "../LeaveRequestModal";
import VacationModal from "../VacationModal";

import './header.scss';
import './header-media.scss'
import 'swiper/css';
import "swiper/css/pagination";

import logoPng from '../../images/logo.png';
import arrowRight from '../../images/icons/arrow-right.svg';
import fire from '../../images/icons/fire.png';
import labelSvg from '../../images/icons/label.svg';
import write from '../../images/icons/write.svg';
import closeBtn from '../../images/icons/close-modal.svg';
import uaFlag from '../../images/icons/ua-flag.png';
import enFlag from '../../images/icons/en-flag.png';
import deFlag from '../../images/icons/de-flag.png';
import nlFlag from '../../images/icons/nl-flag.png';
import plFlag from '../../images/icons/pl-flag.png';


const Header = ({ vacancies, setVacationModalType, vacationModalType, setLeaveRequestType, leaveRequestType }) => {


    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setChangeLanguagePopupOpened(false);
    }

    const [ changeLanguagePopupOpened, setChangeLanguagePopupOpened ] = useState(false);
    const [ LeaveRequestModalVisible, setLeaveRequestModalVisible ] = useState(false);
    const [ VacationModalVisible, setVacationModalVisible ] = useState(false);
    const [ menuPopup, setMenuPopup ] = useState(false);
    const [ modalData, setModalData ] = useState({});
    const [ menuFix, setMenuFix] = useState(false);


    if(VacationModalVisible || LeaveRequestModalVisible || changeLanguagePopupOpened || menuPopup) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    const modalOpen = (state) => {
        state(true);
    }

    const leaveRequestModalClose = () => {
        setLeaveRequestModalVisible(false);
    }

    const vacationModalClose = () => {
        setVacationModalVisible(false);
    }

    const changeModalData = (id) => {
        setModalData(vacancies[id]);
        setVacationModalVisible(true);
        setVacationModalType('header');
    }

    const changeRequestModalData = () => {
        setLeaveRequestModalVisible(true);
        setLeaveRequestType('header');
    }

    const closeMenu = () => {
        setMenuPopup(false);
    }

    const setFixedMenu = () => {
        if(window.scrollY>=300) {
            setMenuFix(true);
        } else {
            setMenuFix(false);
        }
    }

    window.addEventListener('scroll', setFixedMenu);

    return (
        <div className="header">
            {VacationModalVisible && <VacationModal  vacationModalClose={vacationModalClose} data={modalData} vacationModalType={vacationModalType} setLeaveRequestModalVisible={setLeaveRequestModalVisible} /> } 
            {LeaveRequestModalVisible && <LeaveRequestModal modalCloseHeader={leaveRequestModalClose} leaveRequestType={leaveRequestType}/>}
            {changeLanguagePopupOpened && 
                <div className="change-language-popup--wrapper" onClick={e => (e.currentTarget === e.target) && setChangeLanguagePopupOpened(false)}>
                    <div className="change-language-popup">
                    <img src={closeBtn} alt="close btn"className="change-language-popup-close" onClick={() => setChangeLanguagePopupOpened(false)}/>
                    <li>
                        <h4 className="btn" onClick={() => changeLanguage('ua')}><img src={uaFlag} alt="flag"/>{t("uaLang")}</h4>
                        <h4 className="btn" onClick={() => changeLanguage('en')}><img src={enFlag} alt="flag"/>{t("enLang")}</h4>
                        <h4 className="btn" onClick={() => changeLanguage('de')}><img src={deFlag} alt="flag"/>{t("deLang")}</h4>
                        <h4 className="btn" onClick={() => changeLanguage('nl')}><img src={nlFlag} alt="flag"/>{t("nlLang")}</h4>
                        <h4 className="btn" onClick={() => changeLanguage('pl')}><img src={plFlag} alt="flag"/>{t("plLang")}</h4>
                    </li>
                </div>
                </div>
            }
            <div className="gradient"></div>
                
                <div className={`header__top-wrapper ${menuFix ? 'fixed' : ''}`}>
                <div className={`header__top`}>
                    {menuPopup && <div className="header__top-menu--mobile--wrapper" onClick={e => (e.currentTarget === e.target) && setMenuPopup()}>
                        <div className="header__top-menu--mobile">
                            <img src={closeBtn} alt="close btn"className="close-menu" onClick={closeMenu}/>
                            <nav>
                                <h3 className="header__menu-link"><Link onClick={closeMenu} to="aboutUs" smooth={true}>{t('aboutUs')}</Link></h3>
                                <h3 className="header__menu-link"><Link onClick={closeMenu} to="tutorial" smooth={true}>{t("benefits")}</Link></h3>
                                <h3 className="header__menu-link"><Link onClick={closeMenu} to="vacancies" smooth={true}>{t("vacancies")}</Link></h3>
                                <h3 className="header__menu-link"><Link onClick={closeMenu} to="footer" smooth={true}>{t("contacts")}</Link></h3>
                            </nav>
                        </div>
                    </div>}
                    <svg alt="Open menu" className="menuBtn" onClick={() => setMenuPopup(true)} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83366 8.33333H1.50033C1.27931 8.33333 1.06735 8.42113 0.91107 8.57741C0.75479 8.73369 0.666992 8.94565 0.666992 9.16667C0.666992 9.38768 0.75479 9.59964 0.91107 9.75592C1.06735 9.9122 1.27931 10 1.50033 10H9.83366C10.0547 10 10.2666 9.9122 10.4229 9.75592C10.5792 9.59964 10.667 9.38768 10.667 9.16667C10.667 8.94565 10.5792 8.73369 10.4229 8.57741C10.2666 8.42113 10.0547 8.33333 9.83366 8.33333ZM1.50033 1.66667H16.5003C16.7213 1.66667 16.9333 1.57887 17.0896 1.42259C17.2459 1.26631 17.3337 1.05435 17.3337 0.833333C17.3337 0.61232 17.2459 0.400358 17.0896 0.244078C16.9333 0.0877975 16.7213 0 16.5003 0H1.50033C1.27931 0 1.06735 0.0877975 0.91107 0.244078C0.75479 0.400358 0.666992 0.61232 0.666992 0.833333C0.666992 1.05435 0.75479 1.26631 0.91107 1.42259C1.06735 1.57887 1.27931 1.66667 1.50033 1.66667ZM16.5003 4.16667H1.50033C1.27931 4.16667 1.06735 4.25446 0.91107 4.41074C0.75479 4.56702 0.666992 4.77899 0.666992 5C0.666992 5.22101 0.75479 5.43297 0.91107 5.58926C1.06735 5.74554 1.27931 5.83333 1.50033 5.83333H16.5003C16.7213 5.83333 16.9333 5.74554 17.0896 5.58926C17.2459 5.43297 17.3337 5.22101 17.3337 5C17.3337 4.77899 17.2459 4.56702 17.0896 4.41074C16.9333 4.25446 16.7213 4.16667 16.5003 4.16667Z" fill={menuFix ? 'black' : 'white'}/>
                    </svg>

                    <img src={logoPng} alt="Logo" className="header__top-logo"/>
                    <nav className="header__menu">
                         <h3 className="header__menu-link"><Link to="aboutUs" smooth={true}>{t('aboutUs')}</Link></h3>
                         <h3 className="header__menu-link"><Link to="tutorial" smooth={true}>{t("benefits")}</Link></h3>
                         <h3 className="header__menu-link"><Link to="vacancies" smooth={true}>{t("vacancies")}</Link></h3>
                         <h3 className="header__menu-link"><Link to="footer" smooth={true}>{t("contacts")}</Link></h3>
                    </nav>
                    <div className="header__right">
                        <button className="buttonBlue" onClick={changeRequestModalData}>{t("leaveRequest")}</button>
                        <div className="header__right-changeLanguage" onClick={() => setChangeLanguagePopupOpened(true)}>
                            <img className="flag-img" src={t("activeFlag")} alt="Flag"/>
                            <h4>{t("activeLang")}</h4>
                            <svg className="header__right-changeLanguage--arr" width="12" height="8" viewBox="0 0 12 8" fill="" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9999 1.17C10.8126 0.983753 10.5591 0.879211 10.2949 0.879211C10.0308 0.879211 9.77731 0.983753 9.58995 1.17L5.99995 4.71L2.45995 1.17C2.27259 0.983753 2.01913 0.879211 1.75495 0.879211C1.49076 0.879211 1.23731 0.983753 1.04995 1.17C0.95622 1.26297 0.881826 1.37357 0.831057 1.49543C0.780288 1.61729 0.75415 1.74799 0.75415 1.88C0.75415 2.01202 0.780288 2.14272 0.831057 2.26458C0.881826 2.38644 0.95622 2.49704 1.04995 2.59L5.28995 6.83C5.38291 6.92373 5.49351 6.99813 5.61537 7.04889C5.73723 7.09966 5.86794 7.1258 5.99995 7.1258C6.13196 7.1258 6.26267 7.09966 6.38453 7.04889C6.50638 6.99813 6.61699 6.92373 6.70995 6.83L10.9999 2.59C11.0937 2.49704 11.1681 2.38644 11.2188 2.26458C11.2696 2.14272 11.2957 2.01202 11.2957 1.88C11.2957 1.74799 11.2696 1.61729 11.2188 1.49543C11.1681 1.37357 11.0937 1.26297 10.9999 1.17Z" fill={menuFix ? 'black' : '#F5F7F8'}/>
                            </svg>

                        </div>
                       
                    </div>
                </div>
                </div>
                

                <div className="container">

                <div className="header__midle">
                    <h1 className="header__midle-title">{t("headerTitle")}</h1>
                    <p className="header__midle-description">
                    {t("headerDescription")}
                    </p>
                    <button className="buttonBlue" onClick={changeRequestModalData}>{t("leaveRequest")}</button>
                </div>

                <div className="HotVacancies">
                    <div className="HotVacancies__top">
                        <div className="HotVacancies__top-title">
                            <img src={fire} alt="fire icon"/>
                            <h2>{t("hotVacancies")}</h2>
                        </div>
                       <Link smooth={true} to="vacancies"><h3 className="HotVacancies__top-all">{t("seeAll")}<img src={arrowRight} alt="Arrow right"/></h3></Link>
                    </div>
                    <Swiper 
                        className="HotVacancies__items"
                        spaceBetween={25}
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        pagination={{clickable: true,}}
                        breakpoints={{
                            1100: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            840: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            100: {
                                slidesPerView: 1,
                            }
                          }}
                    >
                        {vacancies.map((it, i) => {
                            return(
                                <SwiperSlide className="HotVacancies__item" key={i}>
                                <div onClick={() => changeModalData(i)}>
                                    <h3 className="HotVacancies__item-title">
                                    {it.title}
                                    </h3>
                                    <div className="HotVacancies__item-info">
                                        <h4 className="HotVacancies__item-site"><img src={labelSvg} alt="Label"/>{it.site}</h4>
                                        <h4 className="HotVacancies__item-salary"><span>${it.salary}/</span>{t("hours")}</h4>
                                    </div>
                                    <div className="HotVacancies__item-description">
                                        {it.description}
                                    </div>
                                    </div>
                                    <div className="HotVacancies__item-top">
                                    <h5 className="HotVacancies__item-top--date">{it.date}</h5>
                                    <button className="HotVacancies__item-top--respond" onClick={changeRequestModalData}><img src={write} alt="message ico"/>{t("respond")}</button>
                                    </div>      
                                </SwiperSlide>
                            ) 
                        })}
                        
                    </Swiper >
                </div>
            </div>
            
        </div>
    )
}

export default Header;