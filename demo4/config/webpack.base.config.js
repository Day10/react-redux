let path = required('path');

function resolve(route) {
    return path.join(route)
}
module.export = {
    module: {
        rules: [
            {
                test: '\.js$',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                } 
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
        ]
    }
}