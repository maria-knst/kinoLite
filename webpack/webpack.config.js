const { merge } = require('webpack-merge');
const commotConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commotConfig, envConfig);

    return config;
}