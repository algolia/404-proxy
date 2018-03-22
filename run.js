import { indexer } from './index.js';

const client = indexer({
  appId: 'MX',
  apiKey: 'kjkj',
  indexName: 'sitemap',
});

client.importSitemap('./sitemap.xml');
