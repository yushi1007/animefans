import React from 'react'
import { navigationItems } from '../data/data'
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <nav>
      <a href="#" className="logo">
        AnimeFans
      </a>
      <ul className="menu">
        {navigationItems.map((navigationItem, index) => {
          const { name, href } = navigationItem;
          return (
            <li key={index}><a href={href}>{name}</a></li>
          )
        })}
      </ul>
      <SearchBox />
    </nav>
  )
}

export default Header