/**
 * Clips correct portion of an array by the page length and current page status for the fake pagination.
 * @param {number} pageLength Expected number of items on a page
 * @param {number} currentPage Current page user is on
 * @param {[]} feedItems Feed items array
 * @returns 
 */
const clipFeed = (pageLength, currentPage, feedItems) => {
  const start = (currentPage - 1) * pageLength;
  const end = start + pageLength;
  return feedItems.slice(start, end);
};

export { clipFeed };
