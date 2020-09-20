import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import SearchBar from './SearchBar';
import './Portfolio.sass';

let initialState =
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
    },
  ]
};

// add ids
initialState.cards.forEach((card, index) => card.id = index + 1);

class Portfolio extends Component {
  state = initialState;
  render() {
    const onSearchChange = event => {
      const searchedText = event.target.value.toLowerCase();
      const searchPredicate = c =>
        c.description.toLowerCase().includes(searchedText) ||
        c.title.toLowerCase().includes(searchedText) ||
        c.tags.map(t => t.toLowerCase()).includes(searchedText);
      this.setState({ cards: initialState.cards.filter(searchPredicate) })
    };
    return (
      <div>
        <section id="portfolio" name="portfolio">
          <div className="header">
            <h2>Portfolio</h2>
            <SearchBar placeholderText="&#xF002; Szukaj" onChange={onSearchChange} />
          </div>
          <div className="grid">
            {
              this.state.cards?.length ?
                this.state.cards.map(card =>
                  <PortfolioCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    imageLocation={card.imageLocation}
                    imageAlt={card.imageAlt}
                    githubLink={card.githubLink}
                    tags={card.tags}
                  />) : <div className="not-found">Nie znaleziono :(</div>
            }
          </div>
        </section>
        <div className="and-more">... i wiele więcej, do obejrzenia na <a href="https://github.com/tojatos" target="_blank" rel="noopener noreferrer">githubie</a></div>
      </div>
    );
  }
}

export default Portfolio;
