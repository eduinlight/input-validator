module.exports = function (api) {
  api.cache(false)

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-runtime",
   ].filter(Boolean)
  };
};

