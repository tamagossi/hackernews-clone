import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import {
  fetchShowStoriesStartAsync,
  increasePageNumber
} from '../../redux/show-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import Items from '../../components/items';

const Showpage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.showStories.currentPage);
  const showStories = useSelector(state => state.showStories.showStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    dispatch(fetchShowStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <h5 className="show-tagline f5 fw4 gray ph4 mt2 mb3">
          Please read the
          <NavLink
            className="pointer tooltip"
            to=""
          >
            &nbsp;<u>rules</u>.
            <span className="tooltiptext">Currently disabled. Will be directed to home</span>
          </NavLink>
          You can also browse the
          <NavLink
            className="pointer tooltip"
            to=""
          >
            &nbsp;<u>newest</u>&nbsp;
            <span className="tooltiptext">Currently disabled. Will be directed to home</span>
          </NavLink>
          Show NHs
        </h5>
        <Items
          currentPage={ currentPage }
          items={ showStories }
          loadMore={ loadMore }
          type="show"
        />
      </BodyWrapper>
    </>
  )
}

export default Showpage