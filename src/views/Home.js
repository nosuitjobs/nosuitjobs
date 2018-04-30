import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/test">Go to Test</Link>
      </div>
    );
  }
}

export default App;
