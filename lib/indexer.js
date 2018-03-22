module.exports = function Indexer(options) {
  console.info(options);
  return {
    importSitemap(filepath) {
      console.info(filepath);
    },
  };
};
