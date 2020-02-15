import hackerNewsService from '../../services/hacker-news'
import types from './types';

export const fetchShowStoriesStart = (page) => ({
  type: types.FETCH_SHOWSTORIES_START,
  payload: page
});

export const fetchShowStoriesSuccess = showStoriesItem => ({
  type: types.FETCH_SHOWSTORIES_SUCCESS,
  payload: showStoriesItem
});

export const fetchShowStoriesFailed = errorMessage => ({
  type: types.FETCH_SHOWSTORIES_FAILED,
  payload: errorMessage
});

export const fetchShowStoriesStartAsync = (page = 0) => {
  return dispatch => {
    dispatch(fetchShowStoriesStart(page));

    hackerNewsService.getShowStoryIds()
      .then(ids => {
        hackerNewsService.getStoriesByPage(ids, page)
          .then(res => {
            dispatch(fetchShowStoriesSuccess(res))
          }).catch(err => {
            dispatch(fetchShowStoriesFailed(err))
          })
      }).catch(err => {
        dispatch(fetchShowStoriesFailed(err));
      });
  };
};

export const increasePageNumber = () => ({
  type: types.INCREASE_CURRENT_SHOWPAGE,
  payload: 1
});
