import React from 'react';
import './PortfolioCard.sass'
import {Card} from "./Card";
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
import {Technology} from "./Technology";

// use own redux-original icon, as the one from react-devicons is broken
import { ReactComponent as ReduxOriginalIcon } from "../../icons/redux-original.svg";

import { ReactComponent as FastApiIcon } from "../../icons/fastapi.svg";
import { ReactComponent as SeleniumIcon } from "../../icons/selenium.svg";
import { ReactComponent as AkkaIcon } from "../../icons/akka.svg";
import LocustImage from "../../icons/locust.png";
import exp from "constants";

const techIconSize = "35px";

const LocustIcon = (props?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) =>
    <img src={LocustImage} alt={"Locust"} {...props}/>;

export const technologyToIconWithTooltip = (technology: Technology) => {
    const icon = technologyToIcon(technology)
    return React.cloneElement(icon,
        {
            size: techIconSize,
            width: techIconSize,
            height: techIconSize,
            "data-tip": technology,
            "data-effect": "solid"
        })
}

export const technologyToIcon = (technology: Technology) => {
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
        case Technology.FastAPI: return <FastApiIcon/>;
        case Technology.Locust: return <LocustIcon/>;
        case Technology.Selenium: return <SeleniumIcon/>;
        case Technology.Akka: return <AkkaIcon/>;
    }
}