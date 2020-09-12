import React, { Component } from 'react';
import Header from './Header';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Ryu2', age: 30, belt: 'black', id: 2 },
      { name: 'Ryu4', age: 30, belt: 'black', id: 3 },
    ]
  }
  render() {
    const ninjas = this.state.ninjas.map(ninja =>
      <Ninjas name={ninja.name} age={ninja.age} belt={ninja.belt} key={ninja.id}/>
    )
    return (
      <div className="App">
        <Header />
        <h1>My first react app</h1>
        <p>Welcome :)</p>
        <div className="ninja-container">
          { ninjas }
        </div>
      </div>
    );
  }
}

export default App;
