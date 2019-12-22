import React from 'react';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <footer className="app__footer">

        </footer>
      </div>
    );
  }
}

export default App;
