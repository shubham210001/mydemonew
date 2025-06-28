        // config-overrides.js
        const { override, addWebpackPlugin } = require('customize-cra');
        const MyCustomPlugin = require('./my-custom-webpack-plugin'); // Example for a custom plugin

        module.exports = override(
            // Add a custom Webpack plugin
            addWebpackPlugin(new MyCustomPlugin()),

            // You can also modify existing rules or add new ones here
            // For example, to add a new loader for a specific file type:
            // (config) => {
            //     config.module.rules.push({
            //         test: /\.my-custom-file$/,
            //         use: 'my-custom-loader',
            //     });
            //     return config;
            // }
        );