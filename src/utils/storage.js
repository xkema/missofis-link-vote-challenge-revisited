/**
 * Storage module saves feed data temporarily to the browser storage object.
 * Prefer "sessionStorage" to keep yourself out of user's persistent storage.
 */

// "localStorage" or "sessionStorage"
const storageTarget = 'sessionStorage';
const storageKey = 'missofis-link-vote-challenge-revisited';

// set target storage with app data object if not defined previously
if (window[storageTarget][storageKey] === undefined) {
  window[storageTarget].setItem(storageKey, JSON.stringify({ items: [] }));
}

/**
 * Gets parsed storage data object from target storage
 * @returns {object} Storage data saved to the predefined key
 */
const readStorageData = () => {
  return JSON.parse(window[storageTarget].getItem(storageKey));
};

/**
 * Saves all items stringified to the target storage
 * @param {array} feedItems Feed items to be saved as a JSON string
 */
const updateStorageData = (feedItems) => {
  const appData = readStorageData();
  appData.items = feedItems;
  window[storageTarget].setItem(storageKey, JSON.stringify(appData));
};

export {
  readStorageData,
  updateStorageData
};
