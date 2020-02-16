import React from 'react'
import './styles.scss'

import mapTime from '../../utils/timeMap';
import DisabledNavLink from '../disabled-link';
import PropTypes from 'prop-types';
import { PAGE_LIMIT } from '../../services/hacker-news';

const Item = ({ currentPage, index, item, type }) => {
  return (
    <>
      {
        type !== "job" ? (
          <>
            <h5 className="item-number gray f5 fw6 mv0">
              { currentPage * PAGE_LIMIT + index + 1}.
            </h5>
            <i className="fa fa-caret-up tooltip ml1 gray pointer">
              <span className="tooltiptext">Vote functionality is disabled at the moment</span>
            </i>
          </>
        ) :
        null
      }
      <div className="item-content flex flex-wrap w-100">
        <div className="item-title flex flex-nowrap w-100 ph2">
          <a
            className="fw4 mv0 pointer"
            href={item.url}
          >
            { item.title }
          </a>
          <h5 className="fw4 mv1 ml1 gray">
            {
              item.url ? (
                item.url.includes(`https`) ? (
                  `(${item.url.replace(`https://`, ``).replace(`www.`, ``).split(`/`)[0]})`
                ) : (
                  `(${item.url.replace(`http://`, ``).replace(`www.`, ``).split(`/`)[0]})`
                )
              ) : null
            }
          </h5>
        </div>

        <div className="item-info flex flex-nowrap w-100">
          <span className={`${ type !== "job" ? `ph2` : ``} info-wrapper gray f7`}>
            <span className="score-wrapper">
              {
                type !== 'job' ?
                `${item.score} points` :
                null
              }
            </span>
            <DisabledNavLink
              otherClass="creator-wrapper has-space has-underline gray pointer"
              message={ null }
            >
              {
                type !== 'job' ?
                `by ${ item.by }` :
                null
              }
            </DisabledNavLink>
            <DisabledNavLink
              otherClass="creator-wrapper has-space has-underline gray pointer"
              message={ null }
            >
              { mapTime(item.time) } ago
            </DisabledNavLink>
            <span className="action-wrapper">
              {
                type === `home` || type === `new` ?
                (
                  <DisabledNavLink
                    otherClass="has-line has-underline gray pointer"
                    message={ null }
                  >
                    hide
                  </DisabledNavLink>
                ) : null
              }
              {
                type === `new` ?
                (
                  <>
                    <DisabledNavLink
                      otherClass="has-line has-underline gray pointer"
                      message={ null }
                    >
                      past
                    </DisabledNavLink>
                    <DisabledNavLink
                      otherClass="has-line has-underline gray pointer"
                      message={ null }
                    >
                      web
                    </DisabledNavLink>
                    <DisabledNavLink
                      otherClass="has-line has-underline gray pointer"
                      message={ null }
                    >
                      discuss
                    </DisabledNavLink>
                  </>
                ) : null
              }
            </span>
              {
                type !== "new" ?
                (
                    type !== 'job' ?
                    (
                      <span className="comment-wrapper has-underline has-line pointer">
                        {item.kids ? item.kids.length : 0} comments
                      </span>
                    ) :
                    null
                ) : null
              }
          </span>
        </div>
      </div>
    </>
  )
}

Item.propTypes = {
  currentPage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}

export default Item
