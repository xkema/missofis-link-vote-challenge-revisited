const sortFeed = (orderBy = '', feedItems = []) => {
  let itemsSorted = [...feedItems];
  if (orderBy === 'most') {
    itemsSorted.sort((firstEl, secondEl) => secondEl.votes_count - firstEl.votes_count)
  } else if (orderBy === 'less') {
    itemsSorted.sort((firstEl, secondEl) => - secondEl.votes_count + firstEl.votes_count)
  } else {
    itemsSorted.sort((firstEl, secondEl) => secondEl.date_created - firstEl.date_created)
  }
  return itemsSorted;
};

export { sortFeed };
