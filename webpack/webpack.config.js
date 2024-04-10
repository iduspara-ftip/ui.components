const { merge } = require("webpack-merge");
const mainConfig = require("./webpack.common.js");

module.exports = (env_vars) => {
  const { env } = env_vars;
  // check if file exists

  const fs = require("fs");
  const path = require("path");
  const webpackFile = path.resolve(__dirname, `./webpack.${env}.js`);
  let config = mainConfig;

  if (!fs.existsSync(webpackFile)) {
    console.error(`File ${webpackFile} does not exist`);
  } else {
    const env_configuration = require(`./webpack.${env}.js`);
    config = merge(config, env_configuration);
  }

  return config;
};
