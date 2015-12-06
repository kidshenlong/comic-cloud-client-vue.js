module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.html$/, loader: "html" },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//, loader: 'babel' },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}