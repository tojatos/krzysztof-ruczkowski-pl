import React, { Component } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  render() {
    const myEmail = "tojatos@gmail.com";
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <Footer myEmail={myEmail}/>
      </div>
    );
  }
}

export default App;
