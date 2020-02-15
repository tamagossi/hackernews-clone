import types from './types';

const INITIAL_STATE = {
  currentPage: 0,
  error: null,
  isFetching: false,
  topStories: [],
};

const topStoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TOPSTORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case types.FETCH_TOPSTORIES_START:
      return {
        ...state,
        currentPage: action.payload,
        isFetching: true,
      };
    case types.FETCH_TOPSTORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topStories: action.payload,
    };
    case types.INCREASE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
    };
    default:
      return state;
  }
};

export default topStoriesReducer;
