import {PortfolioState} from "../models/PortfolioState";
import {Technology} from "../models/Technology";

export const initialPortfolioState: PortfolioState =
    {
        cards: [
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
                title: 'Laser Tactics',
                description: 'Web game based on Laser Chess. I worked on a game module backend.',
                detailedDescription: 'Web game based on Laser Chess. I worked on a game module backend.\n' +
                    'The game is based on websockets.',
                imageLocation: '/images/laser_tactics.png',
                imageAlt: 'zdjęcie strony laser tactics',
                githubLink: 'https://github.com/tojatos/laser-tactics',
                tags: [
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Locust",
                    "Docker",
                ],
                year: 2021,
                technologies: [
                    Technology.Python,
                    Technology.Postgresql,
                    Technology.Docker,
                ],
            },
            {
                title: 'Portfolio',
                description: 'My website with portfolio.',
                detailedDescription: 'My website with portfolio.',
                imageLocation: '/images/portfolio2.png',
                imageAlt: 'zdjęcie strony z portfolio',
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
                title: 'NKM Actor Server',
                description: 'A new backend for the NKM game, written in Scala. (WiP)',
                detailedDescription: 'A new backend for the NKM game, written in Scala.\n' +
                    'It uses Akka framework with Akka Persistence.',
                imageLocation: '/images/nkm_actor_server.png',
                imageAlt: 'zdjęcie kodu NKM Actor Server',
                githubLink: 'https://github.com/tojatos/NKMActorServer',
                tags: [
                    "Scala",
                    "Akka",
                    "Docker",
                ],
                year: 2021,
                technologies: [
                    Technology.Scala,
                    Technology.Docker,
                ],
            },
            {
                title: 'Simple RPG',
                description: 'A very simple RPG game written in JavaFX.',
                detailedDescription: 'A very simple RPG game written in JavaFX.\n' +
                    'The purpose of this project was to pass an university course by creating a project that showcases many design patterns.',
                imageLocation: '/images/simple_rpg.png',
                imageAlt: 'zdjęcie gry Simple RPG',
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
                imageAlt: 'zdjęcie gry Popcorn Rush',
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
                imageAlt: 'zdjęcie strony młodzi ratownicy',
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
                ],
            },
            {
                title: 'iOP',
                description: 'Website where you can manage events in Opole.\n' +
                    'Written on the PiastCode hackhathon.',
                detailedDescription: 'Website where you can manage events in Opole.\n' +
                    'Written on the PiastCode hackhathon.',
                imageLocation: '/images/iOP.png',
                imageAlt: 'zdjęcie strony iOP',
                githubLink: 'https://github.com/tojatos/PiastCode',
                tags: [
                    "PHP",
                    "CodeIgniter",
                    "JavaScript",
                ],
                year: 2017,
                technologies: [
                    Technology.Php,
                    Technology.Codeigniter,
                    Technology.Javascript,
                ],
            },
        ]
    };
