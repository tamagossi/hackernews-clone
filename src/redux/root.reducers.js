import { combineReducers } from 'redux';

import topStories from './top-stories/reducers';

const rootReducer = combineReducers({
  topStories,
});

export default rootReducer;
