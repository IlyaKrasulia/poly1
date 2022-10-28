import React from "react";
import { useTranslation } from "react-i18next";


import './vacationModal.scss';
import './vacationModal-media.scss';

import closeModal from '../../images/icons/close-modal.svg';

const VacationModal = ({ closeModalVacs, vacationModalClose, data, VacData, vacationModalType, setLeaveRequestModalVisible }) => {


    const modalType = vacationModalType==="header" ? data : VacData;
    const modalClose = () => {
        if(vacationModalType==="header") {
            return vacationModalClose()
        } else { 
            return closeModalVacs();
        }
 }

 const clickBtn = () => {
    modalClose();
    setLeaveRequestModalVisible(true);
 }
    
 const { t, i18n } = useTranslation();

    return (
        <div className="vacationModal-wrapper" onClick={e => (e.currentTarget === e.target) && modalClose()}>
            <div className="vacationModal">
                <img className="modal-close" alt="modal close" src={closeModal} onClick={modalClose} />
                <img className="vacationModal-left" src={modalType.img} alt="vacation img"/>
                <div className="vacationModal__info">
                    <h1>{modalType.title}</h1>
                    <div className="info">
                        <h2 className="site">{modalType.site}</h2>
                        <h2 className="salary"><span>${modalType.salary}</span>/{t('hours')}</h2>
                    </div>
                    <p>
                        {modalType.description}
                    </p>
                    <button onClick={clickBtn} className="buttonBlue">{t('leaveRequest')}</button>
                </div>
            </div>
        </div>
    )
}

export default VacationModal;