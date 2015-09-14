//var webpack = require('webpack');
//http://rmurphey.com/blog/2015/07/20/karma-webpack-tape-code-coverage/
//https://github.com/ericelliott/tdd-es6-react/tree/master/examples/react-hello
//https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
//https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4
module.exports = function(config) {
    config.set({

        plugins: [
            require('karma-webpack'),
            require('karma-tap'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-coverage')
        ],

        basePath: '',
        frameworks: ['tap'],
        files: ['test/**/*.js'],

        preprocessors: {
            'test/**/*.js': ['webpack']
        },

        webpack: {
            node: {
                fs: 'empty'
            },

            // Instrument code that isn't test or vendor code.
            module: {
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /(test|node_modules)\//,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        reporters: [
            'dots',
            'coverage'
        ],

        coverageReporter: {
            type: 'text',
            dir: 'coverage/'
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
