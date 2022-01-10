import React from 'react';
import './PortfolioCard.sass'
import {Card} from "./models/Card";
import {
    CodecovPlainIcon,
    CodeigniterPlainIcon,
    CsharpOriginalIcon, DjangoOriginalIcon,
    DockerOriginalIcon, JavaOriginalIcon,
    JavascriptOriginalIcon,
    MysqlOriginalIcon,
    PhpOriginalIcon,
    PostgresqlOriginalIcon,
    PythonOriginalIcon,
    ReactOriginalIcon,
    ScalaOriginalIcon,
    TypescriptOriginalIcon,
    UnityOriginalIcon
} from "react-devicons";
import {Technology} from "./models/Technology";

// use own redux-original icon, as the one from react-devicons is broken
import { ReactComponent as ReduxOriginalIcon } from "../redux-original.svg";

const techIconSize = "2em";

const technologyToIconWithSizeAndTooltip = (technology: Technology, size: string) => {
    const icon = technologyToIcon(technology)
    return React.cloneElement(icon, {size: size, width: size, height: size, "data-tip": technology, "data-effect": "solid"})
}

const technologyToIcon = (technology: Technology) => {
    switch (technology) {
        case Technology.CSharp: return <CsharpOriginalIcon/>;
        case Technology.Unity: return <UnityOriginalIcon/>;
        case Technology.Python: return <PythonOriginalIcon/>;
        case Technology.Codecov: return <CodecovPlainIcon/>;
        case Technology.Postgresql: return <PostgresqlOriginalIcon/>;
        case Technology.Mysql: return <MysqlOriginalIcon/>;
        case Technology.Scala: return <ScalaOriginalIcon/>;
        case Technology.Codeigniter: return <CodeigniterPlainIcon/>;
        case Technology.Javascript: return <JavascriptOriginalIcon/>;
        case Technology.Typescript: return <TypescriptOriginalIcon/>;
        case Technology.React: return <ReactOriginalIcon/>;
        case Technology.Docker: return <DockerOriginalIcon/>;
        case Technology.Php: return <PhpOriginalIcon/>;
        case Technology.Java: return <JavaOriginalIcon/>;
        case Technology.Django: return <DjangoOriginalIcon/>;
        case Technology.Redux: return <ReduxOriginalIcon/>;
    }
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
            { card.year ? <div><span className="year">{card.year}</span></div> : ""}
            { card.technologies ?
                <div className="tech-icons">
                    {card.technologies.map(t => <span key={t}>{technologyToIconWithSizeAndTooltip(t, techIconSize)}</span>)}
                </div>
                : ""}
        </div>
    )}

export default PortfolioCard;