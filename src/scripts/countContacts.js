import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    let finalNum = 0;
    data.forEach(() => (finalNum += 1));
    return finalNum;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
