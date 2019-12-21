import React from 'react';
import Header from './components/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main className="app__main">
          
        </main>
        <footer className="app__footer">
 
        </footer>
      </div>
    );
  }
}

export default App;
