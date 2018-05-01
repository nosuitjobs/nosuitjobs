import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Job extends Component {
  render() {
    return (
      <div>
        Job 1
        <Link to="/">Go to Jobs</Link>
      </div>
    );
  }
}

export default Job;
