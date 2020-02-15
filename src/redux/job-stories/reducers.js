import types from './types';

const INITIAL_STATE = {
  currentPage: 0,
  error: null,
  isFetching: false,
  jobStories: [],
};

const jobStoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_JOBSTORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case types.FETCH_JOBSTORIES_START:
      return {
        ...state,
        currentPage: action.payload,
        isFetching: true,
      };
    case types.FETCH_JOBSTORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jobStories: action.payload,
    };
    case types.INCREASE_CURRENT_JOBPAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
    };
    default:
      return state;
  }
};

export default jobStoriesReducer;
