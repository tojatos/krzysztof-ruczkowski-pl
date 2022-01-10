import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer';
import ReactTooltip from 'react-tooltip';

const App = () => {
    const myEmail = "tojatos@gmail.com";
    return (
        <div className="App">
            <Header />
            <Portfolio />
            <Footer myEmail={myEmail}/>
            <ReactTooltip/>
        </div>
    );
}

export default App;
