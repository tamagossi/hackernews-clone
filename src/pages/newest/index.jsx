import React, { useEffect } from 'react';


import {
  fetchNewestStoriesStartAsync,
  increasePageNumber
} from '../../redux/new-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import ErrorIndicator from '../../components/error';
import Items from '../../components/items';

const Askpage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.newestStories.currentPage);
  const error = useSelector(state => state.newestStories.error);
  const isFetching = useSelector(state => state.newestStories.isFetching);
  const newestStories = useSelector(state => state.newestStories.newestStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    document.title = `New Links | ${document.title}`
    dispatch(fetchNewestStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        {
          !error ?
            <Items
              currentPage={ currentPage }
              isFetching={ isFetching }
              items={ newestStories }
              loadMore={ loadMore }
              type="new"
            /> :
            <ErrorIndicator />
        }
      </BodyWrapper>
    </>
  )
}

export default Askpage