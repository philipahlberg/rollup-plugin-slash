import path from 'path';
import fs from 'fs';

export default (dir) => ({
  resolveId: (importee) => {
    if (importee[0] === '/') {
      const absPath = path.resolve(dir + importee);
      return fs.existsSync(absPath) ? absPath : null;
    }
    return null;
  }
});