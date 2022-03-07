import { clipFeed } from '../utils/clipFeed';

describe(`clipFeed.test.js`, () => {
  const arrayToBeClipped = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  test(`should clip first 4 items`, () => {
    const clippedPortion = clipFeed(4, 1, arrayToBeClipped);
    expect(clippedPortion).toStrictEqual([1, 2, 3, 4]);
  });
  test(`should clip all items`, () => {
    const clippedPortion = clipFeed(999, 1, arrayToBeClipped);
    expect(clippedPortion).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test(`should clip nothing`, () => {
    const clippedPortion = clipFeed(999, 2, arrayToBeClipped);
    expect(clippedPortion).toStrictEqual([]);
  });
});
