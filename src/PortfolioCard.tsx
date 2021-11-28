import React from 'react';
import './PortfolioCard.sass'

interface Card {
    title: string
    description: string
    imageLocation: string
    imageAlt: string
    githubLink: string | undefined
    tags: string[]
}

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
        </div>
)}

export default PortfolioCard;