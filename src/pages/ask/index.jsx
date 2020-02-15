import React, { useEffect } from 'react';


import {
  fetchAskStoriesStartAsync,
  increasePageNumber
} from '../../redux/ask-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import Items from '../../components/items';

const Askpage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.askStories.currentPage);
  const askStories = useSelector(state => state.askStories.askStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    dispatch(fetchAskStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <Items
          currentPage={ currentPage }
          items={ askStories }
          loadMore={ loadMore }
          type="home"
        />
      </BodyWrapper>
    </>
  )
}

export default Askpage