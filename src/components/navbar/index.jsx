import React from 'react';
import './styles.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const menu = [
    { name: 'new', url: '/newest' },
    { name: 'past', url: '' },
    { name: 'comment', url: '/newcomments' },
    { name: 'ask', url: '/ask' },
    { name: 'show', url: '' },
    { name: 'jobs', url: '/jobs' },
    { name: 'submit', url: '' },
  ]

  return (
    <div className="navbar-wrapper flex flex-nowrap justify-between w-100 w-80-l mt2-l bg-orange">
      <div className="left-menu flex flex-wrap w-90">
        <div className="image-wrapper w-10 pv3 pv1-l ph1">
          <NavLink to="">
            <img
              className="hacker-logo ba b--white"
              alt="Hacker News Logo"
              src="https://news.ycombinator.com/y18.gif"
            />
          </NavLink>
        </div>
        <div className="menu-wrapper w-90 flex flex-wrap pv1-l">
          <NavLink
            className="menu-title w-100 f4 fw7"
            to=""

          >
            Hacker News
          </NavLink>
          <div className="menu-item w-100 f6 f5-l fw5 fw4-l">
            {
              menu.map((item, index) => {
                const linkTag = item.url.length > 1 ? (
                  <NavLink
                    activeClassName="navbar-active"
                    to={item.url}
                  >
                    { item.name }
                  </NavLink>
                ) : (
                  <span className="pointer-default" >
                    { item.name }
                  </span>
                )

                return index !== menu.length - 1 ?
                (
                  <span key={item.name}>
                    { linkTag }
                    <span className="pointer-default ph1"> | </span>
                  </span>
                ) :
                (
                  <span key={item.name}>
                    { linkTag }
                  </span>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="right-menu relative w-10">
        <div className="absolute el-centered">login</div>
      </div>
    </div>
  )
}

export default Navbar
