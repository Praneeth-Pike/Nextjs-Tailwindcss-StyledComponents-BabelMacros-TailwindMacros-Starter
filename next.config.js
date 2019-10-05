node: {
    fs: "empty"
};

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    // This is important to run tw macros in CSS-in-JS.
    webpack(config) {
        config.node = { fs: 'empty' }
        return config
    },
})

// module.exports = {
//     webpack: (config, { isServer }) => {
//         // Fixes npm packages that depend on `fs` module
//         if (!isServer) {
//             config.node = {
//                 fs: 'empty'
//             }
//         }

//         return config
//     }
// }