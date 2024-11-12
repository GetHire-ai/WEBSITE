const path = require('path');

module.exports = {
    // Other Webpack configuration
    resolve: {
        fallback: {
            querystring: require.resolve("querystring-es3"),
        },
    },
};