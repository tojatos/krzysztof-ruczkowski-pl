import {PortfolioState} from "../models/PortfolioState";

export const initialPortfolioState: PortfolioState =
    {
        cards: [
            {
                title: 'NKM',
                description: 'Turowa gra strategiczna na heksagonalnej mapie.',
                imageLocation: '/images/NKM.png',
                imageAlt: 'zdjęcie gry NKM',
                githubLink: 'https://github.com/tojatos/NKM',
                tags: [
                    "C#",
                    "Unity",
                ],
                year: "2016-2020",
            },
            {
                title: 'Laser Tactics',
                description: 'Gra webowa oparta na Laserowych Szachach. Moją częścią pracy był backend modułu gry.',
                imageLocation: '/images/laser_tactics.png',
                imageAlt: 'zdjęcie strony laser tactics',
                githubLink: 'https://github.com/tojatos/laser-tactics',
                tags: [
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Locust",
                ],
                year: 2021,
            },
            {
                title: 'Portfolio',
                description: 'Moja strona z portfolio',
                imageLocation: '/images/portfolio2.png',
                imageAlt: 'zdjęcie strony z portfolio',
                githubLink: 'https://github.com/tojatos/krzysztof-ruczkowski-pl',
                tags: [
                    "JavaScript",
                    "React",
                ],
                year: "2021-2022",
            },
            {
                title: 'NKM Actor Server',
                description: 'Nowy backend do gry NKM, napisany w Scali. (WIP)',
                imageLocation: '/images/nkm_actor_server.png',
                imageAlt: 'zdjęcie kodu NKM Actor Server',
                githubLink: 'https://github.com/tojatos/NKMActorServer',
                tags: [
                    "Scala",
                    "Akka",
                    "Docker",
                ],
                year: 2021,
            },
            {
                title: 'Młodzi ratownicy',
                description: 'Witryna, dzięki której można się wiele nauczyć na temat pierwszej pomocy, a następnie przejść specjalny kurs i odebrać certyfikat Młodego Ratownika.',
                imageLocation: '/images/ratownicy.png',
                imageAlt: 'zdjęcie strony młodzi ratownicy',
                githubLink: 'https://github.com/tojatos/DesignThinking',
                tags: [
                    "PHP",
                    "CodeIgniter",
                    "JavaScript",
                ],
                year: 2017,
            },
            {
                title: 'Simple RPG',
                description: 'Prosta gra RPG',
                imageLocation: '/images/simple_rpg.png',
                imageAlt: 'zdjęcie gry Simple RPG',
                githubLink: 'https://github.com/tojatos/SimpleRPG2',
                tags: [
                    "Java",
                    "JavaFX",
                ],
                year: 2019,
            },
            {
                title: 'iOP',
                description: 'Witryna pozwalająca na dodawanie, przeglądanie i filtrowanie wydarzeń w Opolu. Została napisana na hackathonie PiastCode.',
                imageLocation: '/images/iOP.png',
                imageAlt: 'zdjęcie strony iOP',
                githubLink: 'https://github.com/tojatos/PiastCode',
                tags: [
                    "PHP",
                    "CodeIgniter",
                    "JavaScript",
                ],
                year: 2017,
            },
            {
                title: 'Popcorn Rush',
                description: 'Gra mobilna, w której zbieramy kukurydzę i robimy z niej popcorn.',
                imageLocation: '/images/PopcornRush.png',
                imageAlt: 'zdjęcie gry Popcorn Rush',
                tags: [
                    "C#",
                    "Unity",
                ],
                githubLink: undefined,
                year: 2018,
            },
        ]
    };
