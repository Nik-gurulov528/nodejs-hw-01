import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (contact) => {
  const data = await readContacts();
  data.push(contact);
  writeContacts(data);
};

addOneContact({
  name: 'Bob',
  age: 12,
});
