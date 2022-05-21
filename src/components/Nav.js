import React, { useState } from 'react'
import "../components/Nav.scss"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Nav = () => {

  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  }

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick= ()=> {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  }
  console.log(navBlack);
  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
      <button className='nav__burger' onClick={handleClick}>
        <MenuIcon/>
      </button>
      <img src='./images/netflix.png' className="nav__logo" alt='Nextflix' width={100}/>
      <nav className='nav__links'>
          <a href='/' className='nav__link'>
               Home
          </a>
          <a href='/' className='nav__link'>
              Series
          </a>
          <a href='/' className='nav__link'>
            Movies
          </a>
      </nav>
      <div className='nav__actions'>
        <a href='/' className='nav__action'>
              <SearchIcon/>
        </a>
        <a href='/' className='nav__action'>
              DIRECT
        </a>
        <a href='/' className='nav__action'>
              <CardGiftcardIcon/>
        </a>
        <a href='/' className='nav__action'>
              <NotificationsIcon/>
        </a>
        <a href='/' className='nav__action'>
            <img src='./images/dead-emoji.png' alt='' width={50}/>
        </a>

      </div>
    </div>
  )
}

export default Nav
