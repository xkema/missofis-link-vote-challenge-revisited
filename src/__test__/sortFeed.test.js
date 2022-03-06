import { sortFeed } from '../utils/sortFeed';

describe(`sortFeed.test.js`, () => {
  const mixedArray = [
    { votes_count: 44, date_created: 2 },
    { votes_count: 66, date_created: 1 },
    { votes_count: 55, date_created: 3 }
  ];
  test(`should sort items by newest first if "orderBy" is an empty string`, () => {
    const sortedArray = sortFeed('', mixedArray);
    expect(sortedArray).toStrictEqual([
      { votes_count: 55, date_created: 3 },
      { votes_count: 44, date_created: 2 },
      { votes_count: 66, date_created: 1 }
    ]);
  });
  test(`should sort items by the most voted if "orderBy" parameter is "most"`, () => {
    const sortedArray = sortFeed('most', mixedArray);
    expect(sortedArray).toStrictEqual([
      { votes_count: 66, date_created: 1 },
      { votes_count: 55, date_created: 3 },
      { votes_count: 44, date_created: 2 }
    ]);
  });
  test(`should sort items by the less voted if "orderBy" parameter is "less"`, () => {
    const sortedArray = sortFeed('less', mixedArray);
    expect(sortedArray).toStrictEqual([
      { votes_count: 44, date_created: 2 },
      { votes_count: 55, date_created: 3 },
      { votes_count: 66, date_created: 1 }
    ]);
  });
  test(`should sort items by newest first if "orderBy" parameter an unknown string`, () => {
    const sortedArray = sortFeed('asdasdasdasdasd', mixedArray);
    expect(sortedArray).toStrictEqual([
      { votes_count: 55, date_created: 3 },
      { votes_count: 44, date_created: 2 },
      { votes_count: 66, date_created: 1 }
    ]);
  });
  test(`should sort items even if there are negative votes`, () => {
    const mixedArrayNegative = [
      { votes_count: -44, date_created: 2 },
      { votes_count: 66, date_created: 1 },
      { votes_count: -55, date_created: 3 }
    ];
    const sortedArray = sortFeed('most', mixedArrayNegative);
    expect(sortedArray).toStrictEqual([
      { votes_count: 66, date_created: 1 },
      { votes_count: -44, date_created: 2 },
      { votes_count: -55, date_created: 3 }
    ]);
  });
});
