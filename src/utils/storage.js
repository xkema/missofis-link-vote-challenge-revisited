// "localStorage" or "sessionStorage"
const storageTarget = 'sessionStorage';
const storageKey = 'missofis-link-vote-challenge-revisited';

// set target storage with app data object if not defined previously
if (window[storageTarget][storageKey] === undefined) {
  window[storageTarget].setItem(storageKey, JSON.stringify({ items: [] }));
}

const readStorageData = () => {
  return JSON.parse(window[storageTarget].getItem(storageKey));
};

const updateStorageData = (feedItems) => {
  const appData = readStorageData();
  appData.items = feedItems;
  window[storageTarget].setItem(storageKey, JSON.stringify(appData));
};

export {
  readStorageData,
  updateStorageData
};
