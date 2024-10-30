import { liteClient as algoliasearch } from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

export default searchClient;