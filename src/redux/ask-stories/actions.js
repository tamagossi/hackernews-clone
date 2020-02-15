import hackerNewsService from '../../services/hacker-news'
import types from './types';

export const fetchAskStoriesStart = (page) => ({
  type: types.FETCH_ASKSTORIES_START,
  payload: page
});

export const fetchAskStoriesSuccess = askStoriesItem => ({
  type: types.FETCH_ASKSTORIES_SUCCESS,
  payload: askStoriesItem
});

export const fetchAskStoriesFailed = errorMessage => ({
  type: types.FETCH_ASKSTORIES_FAILED,
  payload: errorMessage
});

export const fetchAskStoriesStartAsync = (page = 0) => {
  return dispatch => {
    dispatch(fetchAskStoriesStart(page));

    hackerNewsService.getAskStoryIds()
      .then(ids => {
        hackerNewsService.getStoriesByPage(ids, page)
          .then(res => {
            dispatch(fetchAskStoriesSuccess(res))
          }).catch(err => {
            dispatch(fetchAskStoriesFailed(err))
          })
      }).catch(err => {
        dispatch(fetchAskStoriesFailed(err));
      });
  };
};

export const increasePageNumber = () => ({
  type: types.INCREASE_CURRENT_PAGE,
  payload: 1
});
