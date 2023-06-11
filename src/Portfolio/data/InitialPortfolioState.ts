import {PortfolioState} from "../models/PortfolioState";
import {Technology} from "../models/Technology";

export const initialPortfolioState: PortfolioState =
    {
        cards: [
            {
                title: 'nkm-server',
                description: 'A new backend for the NKM game, written using functional programming.',
                detailedDescription: 'A new backend for the NKM game, written in Scala.\n' +
                    'It uses Akka framework with Akka Persistence.',
                imageLocation: '/images/nkm-server.png',
                imageAlt: 'nkm-server code',
                githubLink: 'https://github.com/nkm-game/nkm-server',
                tags: [
                    "Scala",
                    "Akka",
                    "Docker",
                ],
                year: "2021-2023",
                technologies: [
                    Technology.Scala,
                    Technology.Docker,
                    Technology.Akka,
                ],
            },
            {
                title: 'nkm-front',
                description: 'A webpage with info about the NKM game.',
                detailedDescription: 'A webpage with info about the NKM game.',
                imageLocation: '/images/nkm-front.png',
                imageAlt: 'nkm-front website',
                githubLink: 'https://github.com/nkm-game/nkm-front',
                tags: [
                    "Typescript",
                    "React",
                    "Redux",
                    "Docker",
                ],
                year: "2022-2023",
                technologies: [
                    Technology.Typescript,
                    Technology.React,
                    Technology.Redux,
                    Technology.Docker,
                ],
            },
            {
                title: 'Laser Tactics',
                description: 'Web game based on Laser Chess. I worked on a game module backend.',
                detailedDescription: 'Web game based on Laser Chess. I worked on a game module backend.\n' +
                    'The game is based on websockets.',
                imageLocation: '/images/laser_tactics.png',
                imageAlt: 'Laser Tactics website',
                githubLink: 'https://github.com/tojatos/laser-tactics',
                tags: [
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Locust",
                    "Docker",
                    "CodeCov",
                ],
                year: 2021,
                technologies: [
                    Technology.Python,
                    Technology.Postgresql,
                    Technology.Docker,
                    Technology.FastAPI,
                    Technology.Locust,
                    Technology.Codecov,
                ],
            },
            {
                title: 'NKM',
                description: 'Turn based strategy game on a hexagonal map.',
                detailedDescription: 'Turn based strategy game on a hexagonal map.',
                imageLocation: '/images/NKM.png',
                imageAlt: 'NKM game',
                githubLink: 'https://github.com/tojatos/NKM',
                tags: [
                    "C#",
                    "Unity",
                ],
                year: "2016-2020",
                technologies: [
                    Technology.CSharp,
                    Technology.Unity,
                ],
            },
            {
                title: 'Portfolio',
                description: 'My website with portfolio.',
                detailedDescription: 'My website with portfolio.',
                imageLocation: '/images/portfolio2.png',
                imageAlt: 'portfolio website',
                githubLink: 'https://github.com/tojatos/krzysztof-ruczkowski-pl',
                tags: [
                    "TypeScript",
                    "React",
                    "Docker",
                ],
                year: "2021-2022",
                technologies: [
                    Technology.Typescript,
                    Technology.React,
                    Technology.Docker,
                ],
            },
            {
                title: 'Sparkle',
                description: 'A roguelike game.',
                detailedDescription: 'A roguelike game I worked on with my university colleague.' +
                    'We won the game jam.',
                imageLocation: '/images/sparkle.png',
                imageAlt: 'sparkle game',
                githubLink: 'https://smutnacebula.itch.io/sparkle',
                tags: [
                    "C#",
                    "Unity",
                ],
                year: "2021",
                technologies: [
                    Technology.CSharp,
                    Technology.Unity,
                ],
            },
            {
                title: 'GOT PTTK',
                description: 'Mountain trip planning.',
                detailedDescription: 'Mountain trip planning.\n' +
                    'Includes backend API in django-rest-framework, frontend in React, Selenium tests and a scraper.',
                imageLocation: '/images/got_pttk.png',
                imageAlt: 'GOT PTTK website',
                githubLink: 'https://github.com/tojatos/got-pttk',
                tags: [
                    "TypeScript",
                    "React",
                    "Docker",
                    "Selenium",
                    "Python",
                    "Django",
                    "Redux",
                    "django-rest-framework",
                ],
                year: "2020-2021",
                technologies: [
                    Technology.Typescript,
                    Technology.React,
                    Technology.Redux,
                    Technology.Python,
                    Technology.Django,
                    Technology.Selenium,
                    Technology.Docker,
                ],
            },
            {
                title: 'edu-cl-mail front',
                description: 'A better alternative for the university internal mailbox.',
                detailedDescription: 'A better alternative for the university internal mailbox.',
                imageLocation: '/images/edu_cl_mail.png',
                imageAlt: 'Edu.cl front website',
                githubLink: 'https://github.com/tojatos/edu-cl-mail-front',
                tags: [
                    "JavaScript",
                    "React",
                    "Redux",
                    "Docker",
                ],
                year: 2020,
                technologies: [
                    Technology.Typescript,
                    Technology.React,
                    Technology.Redux,
                    Technology.Docker,
                ],
            },
            {
                title: 'Simple RPG',
                description: 'A very simple RPG game written in JavaFX.',
                detailedDescription: 'A very simple RPG game written in JavaFX.\n' +
                    'The purpose of this project was to pass an university course by creating a project that showcases many design patterns.',
                imageLocation: '/images/simple_rpg.png',
                imageAlt: 'Simple RPG game',
                githubLink: 'https://github.com/tojatos/SimpleRPG2',
                tags: [
                    "Java",
                    "JavaFX",
                ],
                year: 2019,
                technologies: [Technology.Java],
            },
            {
                title: 'Popcorn Rush',
                description: 'Mobile game, where you collect popcorn and make popcorn out of it.',
                detailedDescription: 'Mobile game, where you collect popcorn and make popcorn out of it.\n' +
                    'Made during remote internship with Strangelet Studio.',
                imageLocation: '/images/PopcornRush.png',
                imageAlt: 'Popcorn Rush game',
                tags: [
                    "C#",
                    "Unity",
                ],
                githubLink: undefined,
                year: 2018,
                technologies: [
                    Technology.CSharp,
                    Technology.Unity,
                ],
            },
            {
                title: 'Młodzi ratownicy',
                description: 'Website where you can learn about first aid, pass an exam and receive a certificate.',
                detailedDescription: 'Website where you can learn about first aid, pass an exam and receive a certificate.',
                imageLocation: '/images/ratownicy.png',
                imageAlt: 'Młodzi ratownicy website',
                githubLink: 'https://github.com/tojatos/DesignThinking',
                tags: [
                    "PHP",
                    "CodeIgniter",
                    "JavaScript",
                    "Docker",
                ],
                year: 2017,
                technologies: [
                    Technology.Php,
                    Technology.Codeigniter,
                    Technology.Javascript,
                    Technology.Docker,
                    Technology.Mysql,
                ],
            },
            {
                title: 'iOP',
                description: 'Website where you can manage events in Opole.\n' +
                    'Written on the PiastCode hackhathon.',
                detailedDescription: 'Website where you can manage events in Opole.\n' +
                    'Written on the PiastCode hackhathon.',
                imageLocation: '/images/iOP.png',
                imageAlt: 'iOP website',
                githubLink: 'https://github.com/tojatos/PiastCode',
                tags: [
                    "PHP",
                    "CodeIgniter",
                    "JavaScript",
                    "Mysql",
                ],
                year: 2017,
                technologies: [
                    Technology.Php,
                    Technology.Codeigniter,
                    Technology.Javascript,
                    Technology.Mysql,
                ],
            },
        ]
    };
