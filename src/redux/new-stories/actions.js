import hackerNewsService from '../../services/hacker-news'
import types from './types';

export const fetchNewestStoriesStart = (page) => ({
  type: types.FETCH_NEWESTSTORIES_START,
  payload: page
});

export const fetchNewestStoriesSuccess = newestStoriesItem => ({
  type: types.FETCH_NEWESTSTORIES_SUCCESS,
  payload: newestStoriesItem
});

export const fetchNewestStoriesFailed = errorMessage => ({
  type: types.FETCH_NEWESTSTORIES_FAILED,
  payload: errorMessage
});

export const fetchNewestStoriesStartAsync = (page = 0) => {
  return dispatch => {
    dispatch(fetchNewestStoriesStart(page));

    hackerNewsService.getNewestStoryIds()
      .then(ids => {
        hackerNewsService.getStoriesByPage(ids, page)
          .then(res => {
            dispatch(fetchNewestStoriesSuccess(res))
          }).catch(err => {
            dispatch(fetchNewestStoriesFailed(err))
          })
      }).catch(err => {
        dispatch(fetchNewestStoriesFailed(err));
      });
  };
};

export const increasePageNumber = () => ({
  type: types.INCREASE_CURRENT_NEWPAGE,
  payload: 1
});
