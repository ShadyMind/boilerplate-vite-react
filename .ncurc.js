/** @type {import('npm-check-updates').RunOptions} */
const options = {
  cache: true,
  cacheFile: './.artifacts/npm-check-update.cache.json',
  interactive: true,
  doctor: true
};

module.exports = options;
