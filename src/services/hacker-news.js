import Service from './Api';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const JSON_QUERY = '.json?print=pretty';
const client = new Service({ baseURL: BASE_URL });
const hackerNewsService = {};

export const PAGE_LIMIT = 30;
const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsService.getAskStoryIds = () => client.get(`/askstories${JSON_QUERY}`);
hackerNewsService.getJobStoryIds = () => client.get(`/jobstories${JSON_QUERY}`);
hackerNewsService.getNewestStoryIds = () => client.get(`/newstories${JSON_QUERY}`);
hackerNewsService.getShowStoryIds = () => client.get(`/showstories${JSON_QUERY}`);
hackerNewsService.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);

hackerNewsService.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
hackerNewsService.getStories = (ids) => {
  const storyPromises = ids.map(id => hackerNewsService.getStory(id));
  return Promise.all(storyPromises);
};
hackerNewsService.getStoriesByPage = (ids, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: ids });
  const storyPromises = activeIds.map(id => hackerNewsService.getStory(id));
  return Promise.all(storyPromises);
};

export default hackerNewsService;
