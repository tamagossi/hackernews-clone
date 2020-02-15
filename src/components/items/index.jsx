import React from 'react'
import './styles.scss'

import mapTime from '../../utils/timeMap';
import DisabledNavLink from '../disabled-link';
import PropTypes from 'prop-types';


const Item = ({ currentPage, items, loadMore, type }) => {
  return (
    <>
      {
        items ? (
          <>
            {
              items.map((item, index) => {
                return (
                  <div
                    className="flex flex-nowrap justify-start w-100 mb3"
                    key={ item.id }
                  >
                    <h5 className="item-number gray f5 fw6 mv0">
                      { currentPage * 30 + index + 1}.
                    </h5>
                    <i className="fa fa-caret-up tooltip ml1 gray pointer">
                      <span className="tooltiptext">Vote functionality is disabled at the moment</span>
                    </i>

                    <div className="item-content flex flex-wrap w-100">
                      <div className="item-title flex flex-nowrap w-100 ph2">
                        <h3 className="fw4 mv0">
                          { item.title }
                        </h3>
                        <h5 className="fw4 mv1 ml1 gray">
                          {
                            item.url ? (
                              `(${item.url.replace(`https://`, ``).replace(`www.`, ``).split(`/`)[0]})`
                            ) : null
                          }
                        </h5>
                      </div>

                      <div className="item-info flex flex-nowrap w-100">
                        <span className="info-wrapper gray f7 ph2">
                          <span className="score-wrapper">
                            { item.score } points
                          </span>
                          <DisabledNavLink
                            otherClass="creator-wrapper has-space has-underline gray pointer"
                            message={ null }
                          >
                            by { item.by }
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
                                <span className="comment-wrapper has-underline has-line pointer">
                                  ${item.kids ? item.kids.length : 0} comments
                                </span>
                              ) : null
                            }
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {
              items.length > 0 ? (
                <div
                  className="ph4 gray f4 has-underline pointer"
                  onClick={() => loadMore()}
                >
                  More
                </div>
              ) : null
            }
          </>
        ) : null
      }
    </>
  )
}

Item.propTypes = {
  currentPage: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default Item
