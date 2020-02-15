import React, { useEffect } from 'react';


import {
  fetchJobStoriesStartAsync,
  increasePageNumber
} from '../../redux/job-stories/actions';
import { useDispatch, useSelector } from 'react-redux';

import BodyWrapper from '../../components/body-wrapper';
import Items from '../../components/items';

const Jobpage = () => {
  const dispatch = useDispatch();

  const jobStories = useSelector(state => state.jobStories.jobStories);
  const currentPage = useSelector(state => state.jobStories.currentPage);
  const isFetching = useSelector(state => state.jobStories.isFetching);

  const loadMore = () => {
    dispatch(increasePageNumber())
  }

  useEffect(() => {
    document.title = `Job | ${document.title}`
    dispatch(fetchJobStoriesStartAsync(currentPage));
  }, [dispatch, currentPage])

  return (
    <>
      <BodyWrapper>
        <span className="ph2 pt2 pb3 gray">
          These are jobs at YC startups. See more at
          <a
            className="pointer"
            href="https://www.workatastartup.com/"
          >
            &nbsp;<u>Work at a Startup</u>,
          </a>
          <a
            className="pointer"
            href="https://triplebyte.com/?ref=yc_jobs"
          >
            &nbsp;<u>Triplebyte</u>,
          </a>
          <a
            className="pointer"
            href="https://www.keyvalues.com/yc-funded-companies"
          >
            &nbsp;<u>Key Values</u>.
          </a>
        </span>
        <Items
          currentPage={ currentPage }
          isFetching={ isFetching }
          items={ jobStories }
          loadMore={ loadMore }
          type="job"
        />
      </BodyWrapper>
    </>
  )
}

export default Jobpage