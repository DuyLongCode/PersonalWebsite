import React from 'react';
import { Link } from 'react-router-dom';

export function DuyLongNavigation(){
    return (
      <nav style={{
        padding: '1rem',
        backgroundColor: '#333',
        color: 'white'
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem'
        }}>
          <li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
          <li><Link to="/personal" style={{color: 'white', textDecoration: 'none'}}>Personal</Link></li>
          <li><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
        </ul>
      </nav>
    );
}
