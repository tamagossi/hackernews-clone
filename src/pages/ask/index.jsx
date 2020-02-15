import React, { useEffect } from 'react';


import {
  fetchAskStoriesStartAsync,
  increasePageNumber
} from '../../redux/ask-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import ErrorIndicator from '../../components/error';
import Items from '../../components/items';

const Askpage = () => {
  const dispatch = useDispatch();

  const askStories = useSelector(state => state.askStories.askStories);
  const currentPage = useSelector(state => state.askStories.currentPage);
  const error = useSelector(state => state.askStories.error);
  const isFetching = useSelector(state => state.askStories.isFetching);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    document.title = `Ask | ${document.title}`
    dispatch(fetchAskStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        {
          !error ?
            <Items
              currentPage={ currentPage }
              isFetching={ isFetching }
              items={ askStories }
              loadMore={ loadMore }
              type="ask"
            /> :
            <ErrorIndicator />
        }
      </BodyWrapper>
    </>
  )
}

export default Askpage