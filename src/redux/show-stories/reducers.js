import types from './types';

const INITIAL_STATE = {
  currentPage: 0,
  error: null,
  isFetching: false,
  showStories: [],
};

const showStoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SHOWSTORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case types.FETCH_SHOWSTORIES_START:
      return {
        ...state,
        currentPage: action.payload,
        isFetching: true,
      };
    case types.FETCH_SHOWSTORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        showStories: action.payload,
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

export default showStoriesReducer;
