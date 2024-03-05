const { megre } = require('webpack-merge')
const commotConfig = require('./webpack.common.js')

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = megre(commotConfig, envConfig);

    return config;
}