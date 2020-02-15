import types from './types';

const INITIAL_STATE = {
  currentPage: 0,
  error: null,
  isFetching: false,
  askStories: [],
};

const askStoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ASKSTORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case types.FETCH_ASKSTORIES_START:
      return {
        ...state,
        currentPage: action.payload,
        isFetching: true,
      };
    case types.FETCH_ASKSTORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        askStories: action.payload,
    };
    case types.INCREASE_CURRENT_ASKPAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
    };
    default:
      return state;
  }
};

export default askStoriesReducer;
