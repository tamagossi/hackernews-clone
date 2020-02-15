import React, { useEffect } from 'react';

import {
  fetchShowStoriesStartAsync,
  increasePageNumber
} from '../../redux/show-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import DisabledNavLink from '../../components/disabled-link'
import Items from '../../components/items';

const Showpage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.showStories.currentPage);
  const showStories = useSelector(state => state.showStories.showStories);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    document.title = `Show | ${document.title}`
    dispatch(fetchShowStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <h5 className="show-tagline f5 fw4 gray ph4 mt2 mb3">
          Please read the
          <DisabledNavLink>
            &nbsp;<u>rules</u>.
          </DisabledNavLink>
          You can also browse the
          <DisabledNavLink>
            &nbsp;<u>newest</u>&nbsp;
          </DisabledNavLink>
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