const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
/* With additional configuration on top of CSS Modules */
const cssConfig = {
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    namedExport: true
  },
  webpack (config, options) {
    if (!options.isServer) {

      for (let entry of options.defaultLoaders.css) {
        if (entry.loader === 'css-loader') {
          entry.loader = 'typings-for-css-modules-loader'
          break
        }
      }
    }
    return config
  }
};

module.exports = withPlugins([[withCSS, cssConfig]],{
  webpack: config =>{
    console.log("This never runs :(");
    return config;
  }
});
