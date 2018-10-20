import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';


import FontAwesome from 'react-fontawesome';


const Header = () => {

  const logo = () => (
    <Link className={style.logo} to="/">
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>
  )

  const navBars = () => (
     <div className={style.bars}>
      <FontAwesome name="bars"
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
      />
     </div>
  )

  return (
    <header className={style.header}>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;