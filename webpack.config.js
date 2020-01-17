const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-transform-runtime',
                        'react-css-modules',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&sourceMap',
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'index.min.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
    },
};
