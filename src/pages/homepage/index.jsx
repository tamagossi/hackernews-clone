import React, { useEffect } from 'react';


import {
  fetchTopStoriesStartAsync,
  increasePageNumber
} from '../../redux/top-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import ErrorIndicator from '../../components/error';
import Items from '../../components/items/';

const Homepage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.topStories.currentPage);
  const error = useSelector(state => state.topStories.error);
  const isFetching = useSelector(state => state.topStories.isFetching);
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
        {
          !error ?
            <Items
              currentPage={ currentPage }
              isFetching={ isFetching }
              items={ topStories }
              loadMore={ loadMore }
              type="home"
            /> :
            <ErrorIndicator />
        }
      </BodyWrapper>
    </>
  )
}

export default Homepage