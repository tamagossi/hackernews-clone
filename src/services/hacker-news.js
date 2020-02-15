import Service from './Api';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const JSON_QUERY = '.json?print=pretty';
const client = new Service({ baseURL: BASE_URL });
const hackerNewsService = {};

const PAGE_LIMIT = 30;
const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsService.getNewestStoryIds = () => client.get(`/newstories${JSON_QUERY}`);
hackerNewsService.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);

hackerNewsService.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
hackerNewsService.getStoriesByPage = (ids, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: ids });
  const storyPromises = activeIds.map(id => hackerNewsService.getStory(id));
  return Promise.all(storyPromises);
};

export default hackerNewsService;
