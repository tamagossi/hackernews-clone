import React, { useEffect } from 'react';


import {
  fetchNewestStoriesStartAsync,
  increasePageNumber
} from '../../redux/new-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import Items from '../../components/items/';

const Homepage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.newestStories.currentPage);
  const newestStories = useSelector(state => state.newestStories.newestStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    dispatch(fetchNewestStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <Items
          currentPage={ currentPage }
          items={ newestStories }
          loadMore={ loadMore }
          type="new"
        />
      </BodyWrapper>
    </>
  )
}

export default Homepage