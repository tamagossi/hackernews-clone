import React from 'react'
import './styles.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const menu = [
    { name: 'Guidlines', url: '' },
    { name: 'FAQ', url: '' },
    { name: 'Support', url: '' },
    { name: 'API', url: '' },
    { name: 'Security', url: '' },
    { name: 'Lists', url: '/jobs' },
    { name: 'Bookmarklet', url: '' },
    { name: 'Legal', url: '' },
    { name: 'Apply to YC', url: '' },
    { name: 'Contact', url: '' },
  ]

  return (
    <div className="footer-wrapper flex flex-wrap w-100 w-80-l pa3 mb3">
      <NavLink
        className="w-100 fw6 tc"
        to="/"
      >
        Applications are open for YC Summer 2020
      </NavLink>

      <div className="menu-item w-100 mt3 f6 fw4 tc">
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

      <div className="search-wrapper flex flex-wrap w-100">
        <div className="search-title w-100 mt3 f5 fw5 gray tc">
          Search:
        </div>
        <div className="searchbar-wrapper w-100 mt2 ph3">
          <input
            className="w-100"
            type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
