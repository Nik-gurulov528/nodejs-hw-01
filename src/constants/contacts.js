import path from 'node:path';
import { cwd } from 'node:process';

export const PATH_DB = path.join(cwd(), 'src', 'db', 'db.json');
