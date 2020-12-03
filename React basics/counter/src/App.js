import React from 'react';
import './App.css';
import Counter from './Counter';
import Header from './Header';
class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Counter></Counter>
          <Counter></Counter>
          
      </header>
    </div>
  );
}
}

export default App;
