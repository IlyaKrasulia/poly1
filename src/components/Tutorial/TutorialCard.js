import React from "react";

import './tutorial.scss';

const TutorialCard = ({ img, title, desc }) => {

    return (
        <div className="tutorial__card">
            <img className="tutorial__card-img" src={img} alt="icon"/>
            <div className="tutorial__card-info">
                <h4 className="tutorial__card-title">{title}</h4>
                <p className="tutorial__card-description">{desc}</p>
            </div>
            
        </div>
    )
}

export default TutorialCard;