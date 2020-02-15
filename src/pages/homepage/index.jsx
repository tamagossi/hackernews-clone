import React, { useEffect } from 'react';


import {
  fetchTopStoriesStartAsync,
  increasePageNumber
} from '../../redux/top-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import Items from '../../components/items/';

const Homepage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.topStories.currentPage);
  const topStories = useSelector(state => state.topStories.topStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    dispatch(fetchTopStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <Items
          currentPage={ currentPage }
          items={ topStories }
          loadMore={ loadMore }
          type="home"
        />
      </BodyWrapper>
    </>
  )
}

export default Homepage