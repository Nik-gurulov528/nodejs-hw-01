import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const result = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(result);
    return data;
  } catch (error) {
    console.log(error);
  }
};
