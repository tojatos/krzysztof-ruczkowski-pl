import React from 'react';
import './PortfolioCard.sass'

const PortfolioCard = ({title, description, imageLocation, imageAlt, githubLink}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{title}</h3>
                <span className="ver-align">
                    <p>{description}</p>
                </span>
            </div>
            <div className="img-container">
                <img src={imageLocation} alt={imageAlt} />
            </div>
            { githubLink ? <a href={githubLink} target="_blank" rel="noopener noreferrer"><i className="github-link"></i></a> : ""}
        </div>
)}

export default PortfolioCard;