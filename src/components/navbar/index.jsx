import React from 'react';
import './styles.scss';

import { Link } from 'react-router-dom';

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
    <div className="navbar-wrapper flex flex-nowrap justify-between w-100 bg-orange">
      <div className="left-menu flex flex-wrap w-90">
        <div className="image-wrapper pv3 ph1">
          <Link to="">
            <img className="hacker-logo ba b--white"
              alt="Hacker News Logo"
              src="https://news.ycombinator.com/y18.gif"
            />
          </Link>
        </div>
        <div className="menu-wrapper flex flex-wrap pv2">
          <div className="menu-title w-100 f4 fw7">
            Hacker News
          </div>
          <div className="menu-item w-100 f6 fw5">
            {
              menu.map((item, index) => {
                const linkTag = item.url.length > 1 ? (
                  <Link
                    activeClassName="navbar-active"
                    to={item.url}
                  >
                    { item.name }
                  </Link>
                ) : (
                  <span className="pointer-default">
                    { item.name }
                  </span>
                )

                return index !== menu.length - 1 ?
                (
                  <>
                    { linkTag }
                    <span class="pointer-default ph1"> | </span>
                  </>
                ) :
                (
                  linkTag
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
