import { readStorageData, updateStorageData } from '../utils/storage';

describe(`storage.test.js`, () => {
  test(`should fill storage with an empty array after module import`, () => {
    const appData = window.sessionStorage.getItem('missofis-link-vote-challenge-revisited');
    expect(appData).toBe('{\"items\":[]}');
  });
  test(`should get storage data as a JavaScript object`, () => {
    const appData = readStorageData();
    expect(appData).toStrictEqual({items: []});
  });
  test(`should update storage data with a JavaScript object`, () => {
    updateStorageData(['1', '2', '3']);
    const appData = readStorageData();
    expect(appData).toStrictEqual({ items: ['1' , '2', '3'] });
  });
});
