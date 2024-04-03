import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 , justifyContent:'flex-end'}}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
