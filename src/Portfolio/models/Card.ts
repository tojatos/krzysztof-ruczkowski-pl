import {Technology} from "./Technology";

export interface Card {
    title: string
    description: string
    imageLocation: string
    imageAlt: string
    githubLink: string | undefined
    tags: string[]
    year: string | number | undefined
    technologies: Technology[] | undefined
}