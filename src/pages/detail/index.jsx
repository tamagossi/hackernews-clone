import React, { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom';
import hackerNewsService from '../../services/hacker-news';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner';
import Item from '../../components/item';
import BodyWrapper from '../../components/body-wrapper/';

const DetailPage = ({ location }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    hackerNewsService.getStory(location.search.split(`=`)[1])
      .then(res => setItem(res))
      .catch(err => console.log(err))
  })

  return (
    <BodyWrapper>
      {
        item ? (
          <div className="detail-wrapper flex flex-wrap w-100 mb3">
            <div className="item-wrapper w-100">
              <div className="item-info flex flex-nowrap w-100">
                <Item
                  currentPage={ null }
                  index={ null }
                  item={ item }
                  type="detail"
                />
              </div>
              <div className="form-area w-100 mv3 ph3">
                <div className="text-area-wrapper w-100">
                  <textarea
                    cols="80"
                    id="comment"
                    name="comment"
                    rows="10"
                  ></textarea>
                </div>
                <button className="mv2 tooltip" disabled>
                  add comment
                  <span className="tooltiptext">Comment functionality is disabled at the moment</span>
                </button>
              </div>
            </div>
            <div className="comment-wrapper ph3">
              {
                item.kids.map((kid) => <div key={kid}>{ kid }&nbsp;</div>)
              }
            </div>
          </div>
        )
        : <Spinner />
      }
    </BodyWrapper>
  )
}

DetailPage.propTypes = {
  location: PropTypes.object,
}

export default withRouter(DetailPage)

