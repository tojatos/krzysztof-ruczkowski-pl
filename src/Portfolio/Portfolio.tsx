import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import SearchBar from '../SearchBar';
import './Portfolio.sass';
import {Card} from "./models/Card";
import {initialPortfolioState} from "./data/InitialPortfolioState";
import FadeIn from 'react-fade-in';

class Portfolio extends Component {
  state = initialPortfolioState;
  render() {
    const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
      const searchedText = e.currentTarget.value.toLowerCase();
      const searchPredicate = (c: Card) =>
          c.description.toLowerCase().includes(searchedText) ||
          c.title.toLowerCase().includes(searchedText) ||
          c.tags.map(t => t.toLowerCase()).includes(searchedText);
      this.setState({ cards: initialPortfolioState.cards.filter(searchPredicate) })
    };
    return (
        <div>
          <section id="portfolio">
            <div className="header">
              <h2>Portfolio</h2>
              <SearchBar placeholderText="&#xF002; Szukaj" onChange={onSearchChange} />
            </div>
            <div>
                <FadeIn className="grid">
                  {
                    this.state.cards?.length ?
                        this.state.cards.map(card =>
                            <PortfolioCard
                                key={card.title}
                                {...card}
                            />) : <div className="not-found">Nie znaleziono :(</div>
                  }
                </FadeIn>
            </div>
          </section>
          <div className="and-more">... and you can find more code on my <a href="https://github.com/tojatos" target="_blank" rel="noopener noreferrer">github</a></div>
        </div>
    );
  }
}

export default Portfolio;
