import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jobs extends Component {
  render() {
    return (
      <div>
        Jobs
        <Link to="/job/1">Go to Job 1</Link>
      </div>
    );
  }
}

export default Jobs;
