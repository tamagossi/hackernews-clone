import { combineReducers } from 'redux';

import newestStories from './new-stories/reducers';
import topStories from './top-stories/reducers';

const rootReducer = combineReducers({
  newestStories,
  topStories,
});

export default rootReducer;
