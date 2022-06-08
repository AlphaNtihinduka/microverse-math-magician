import React from 'react';
import { Link } from 'react-router-dom';
import '../css/linking.css';

const Linking = () => (
  <nav className="nav">
    <div className="right-nav">Math Magicians</div>
    <div className="left-nav">
      <Link to="/">Home| </Link>
      <Link to="/calculator">Calculator| </Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Linking;
