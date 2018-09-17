'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));

var index = (dir) => ({
  resolveId: (importee) => {
    if (importee[0] === '/') {
      const absPath = path.resolve(dir + importee);
      return fs.existsSync(absPath) ? absPath : null;
    }
    return null;
  }
});

module.exports = index;
