import React from 'react'
import './styles.scss'

import mapTime from '../../utils/timeMap';
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
                          <span className="creator-wrapper has-space has-underline pointer">
                            by { item.by }
                          </span>
                          <span className="time-wrapper has-space has-underline pointer">
                            { mapTime(item.time) } ago
                          </span>
                          <span className="action-wrapper">
                            {
                              type === `home` || type === `new` ?
                              (
                                <span className="has-line has-underline pointer">hide</span>
                              ) : null
                            }
                            {
                              type === `new` ?
                              (
                                <>
                                  <span className="has-line has-underline pointer">past</span>
                                  <span className="has-line has-underline pointer">web</span>
                                  <span className="has-line has-underline pointer">discuss</span>
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
