import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        {/* Логотип */}
        <Link to="/" className="nav-logo">МЕЙІРІМ</Link>

        <div className="nav-links">
          {/* О нас */}
          <Link to="/about" className="nav-item">О нас</Link>

          {/* Выпадающее меню */}
          <div className="dropdown">
            <button className="dropdown-btn">
              Проекты <span className="arrow"></span>
            </button>
            <div className="dropdown-content">
              <Link to="/projects/defactofm">DeFactoFM</Link>
              <Link to="/projects/kids">Программа для детей</Link>
              <Link to="/projects/project3">Проект 3</Link>
              <Link to="/projects/project4">Проект 4</Link>
              <hr />
              <Link to="/projects" className="view-all-link">Посмотреть все</Link>
            </div>
          </div>

          {/* Контакты */}
          <Link to="/contacts" className="nav-item">Контакты</Link>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;
