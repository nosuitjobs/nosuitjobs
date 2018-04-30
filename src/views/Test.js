import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        Test
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}

export default App;
