import types from './types';

const INITIAL_STATE = {
  currentPage: 0,
  error: null,
  isFetching: false,
  newestStories: [],
};

const newestStoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_NEWESTSTORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case types.FETCH_NEWESTSTORIES_START:
      return {
        ...state,
        currentPage: action.payload,
        isFetching: true,
      };
    case types.FETCH_NEWESTSTORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newestStories: action.payload,
    };
    case types.INCREASE_CURRENT_NEWPAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
    };
    default:
      return state;
  }
};

export default newestStoriesReducer;
