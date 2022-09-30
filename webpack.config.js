module.exports = {
    module: {
        rules: [
            {
                test: /\.(png | jpg | jpeg)$/,
                type: 'asset'
            }, 
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.(css | scss | sass)$/i
            }]
    },
    mode: "development"
}