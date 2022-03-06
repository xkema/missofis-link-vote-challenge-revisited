import { getFeedItemTemplate } from '../utils/getFeedItemTemplate';

describe(`getFeedItemTemplate.test.js`, () => {
  test(`should return a feed item template with "name" and "url" set corrrectly from arguments`, () => {
    const feedItemTemplate = getFeedItemTemplate('hola', 'mundo');
    expect(feedItemTemplate.name).toBe('hola');
    expect(feedItemTemplate.url).toBe('mundo');
  });
  test(`should return a feed item template with all required keys`, () => {
    const feedItemTemplate = getFeedItemTemplate('hola', 'mundo');
    expect(Object.keys(feedItemTemplate)).toStrictEqual([
      'name',
      'id',
      'url',
      'date_created',
      'date_last_voted',
      'votes_count',
      'user_voted'
    ]);
  });
});
