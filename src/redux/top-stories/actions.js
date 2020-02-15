import hackerNewsService from '../../services/hacker-news'
import types from './types';

export const fetchTopStoriesStart = (page) => ({
  type: types.FETCH_TOPSTORIES_START,
  payload: page
});

export const fetchTopStoriesSuccess = topStoriesItem => ({
  type: types.FETCH_TOPSTORIES_SUCCESS,
  payload: topStoriesItem
});

export const fetchTopStoriesFailed = errorMessage => ({
  type: types.FETCH_TOPSTORIES_FAILED,
  payload: errorMessage
});

export const fetchTopStoriesStartAsync = (page = 0) => {
  return dispatch => {
    dispatch(fetchTopStoriesStart(page));

    hackerNewsService.getTopStoryIds()
      .then(ids => {
        hackerNewsService.getStoriesByPage(ids, page)
          .then(res => {
            dispatch(fetchTopStoriesSuccess(res))
          }).catch(err => {
            dispatch(fetchTopStoriesFailed(err))
          })
      }).catch(err => {
        dispatch(fetchTopStoriesFailed(err));
      });
  };
};

export const increasePageNumber = () => ({
  type: types.INCREASE_CURRENT_TOPPAGE,
  payload: 1
});
