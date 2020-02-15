import { combineReducers } from 'redux';

import askStories from './ask-stories/reducers';
import jobStories from './job-stories/reducers';
import newestStories from './new-stories/reducers';
import showStories from './show-stories/reducers';
import topStories from './top-stories/reducers';

const rootReducer = combineReducers({
  askStories,
  jobStories,
  newestStories,
  showStories,
  topStories,
});

export default rootReducer;
