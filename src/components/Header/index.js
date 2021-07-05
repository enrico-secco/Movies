import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div className="header">
      <Link to="/"> Filmaria </Link>
      
    </div>
  );
}

