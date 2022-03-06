/**
 * Returns a data template for feed item
 * @param {string} name Name of the item
 * @param {string} url A valid URL
 * @returns {object} An object template represents feed item in a db
 */
const getFeedItemTemplate = (name='', url='') => {
  return {
    name: name,
    id: Math.random().toString(16).substring(2, 10),
    url: url,
    date_created: Date.now(),
    date_last_voted: null,
    votes_count: Math.floor(Math.random() * 199) - 99,    
    user_voted: 0
  }
};

export { getFeedItemTemplate };
