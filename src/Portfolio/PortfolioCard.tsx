import React from 'react';
import './PortfolioCard.sass'
import {Card} from "./models/Card";
import {technologyToIconWithTooltip} from "./models/TechnologyToIcon";

const PortfolioCard = (card: Card) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{card.title}</h3>
                <span className="ver-align">
                    <p>{card.description}</p>
                </span>
            </div>
            <div className="img-container">
                <img src={card.imageLocation} alt={card.imageAlt} />
            </div>
            { card.githubLink ? <a href={card.githubLink} target="_blank" rel="noopener noreferrer"><i className="github-link"/></a> : ""}
            { card.year ? <div><span className="year">{card.year}</span></div> : ""}
            { card.technologies ?
                <div className="tech-icons">
                    {card.technologies.map(t => <span key={t}>{technologyToIconWithTooltip(t)}</span>)}
                </div>
                : ""}
        </div>
    )}

export default PortfolioCard;