import React from 'react'
import './styles.scss'

import PropTypes from 'prop-types';
import Spinner from '../spinner';

const Item = ({ currentPage, isFetching, items, loadMore, type }) => {
  return (
    <>
      {
        !isFetching ? (
          <>
            {
              items.map((item, index) => {
                return (
                  <div
                    className="flex flex-nowrap justify-start w-100 mb3"
                    key={ item.id }
                  >
                    <Item
                      currentPage={ currentPage}
                      index={ index }
                      item={ item }
                      type={ type}
                    />
                  </div>
                )
              })
            }
            {
              items.length > 0 ? (
                <div
                  className={`${ type !== "job" ? `ph4` : `ph2`} gray f4 has-underline pointer`}
                  onClick={() => loadMore()}
                >
                  More
                </div>
              ) : null
            }
          </>
        ) : <Spinner />
      }
    </>
  )
}

Item.propTypes = {
  currentPage: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default Item
