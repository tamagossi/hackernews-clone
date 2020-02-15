import hackerNewsService from '../../services/hacker-news'
import types from './types';

export const fetchJobStoriesStart = (page) => ({
  type: types.FETCH_JOBSTORIES_START,
  payload: page
});

export const fetchJobStoriesSuccess = jobStoriesItem => ({
  type: types.FETCH_JOBSTORIES_SUCCESS,
  payload: jobStoriesItem
});

export const fetchJobStoriesFailed = errorMessage => ({
  type: types.FETCH_JOBSTORIES_FAILED,
  payload: errorMessage
});

export const fetchJobStoriesStartAsync = (page = 0) => {
  return dispatch => {
    dispatch(fetchJobStoriesStart(page));

    hackerNewsService.getJobStoryIds()
      .then(ids => {
        hackerNewsService.getStoriesByPage(ids, page)
          .then(res => {
            dispatch(fetchJobStoriesSuccess(res))
          }).catch(err => {
            dispatch(fetchJobStoriesFailed(err))
          })
      }).catch(err => {
        dispatch(fetchJobStoriesFailed(err));
      });
  };
};

export const increasePageNumber = () => ({
  type: types.INCREASE_CURRENT_JOBPAGE,
  payload: 1
});
