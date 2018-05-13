const path = require('path');
module.exports = {
    entry: {
        app: path.join(__dirname, 'app.jsx')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      plugins: [require.resolve('babel-plugin-transform-object-rest-spread')]
                    }
                }
            }
        ]
    }
    // resolve: {
    //     modules: [path.join(__dirname, 'node_modules')]
    // }
};