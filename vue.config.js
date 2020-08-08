module.exports = {
    devServer: {
        proxy: 'http://localhost/joe-website/'
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/joe-website/' : './'
}