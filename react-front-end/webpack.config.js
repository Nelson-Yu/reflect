module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       modifyVars: {
+         'primary-color': '#1DA57A',
+         'link-color': '#1DA57A',
+         'border-radius-base': '2px',
+         // or
+         'hack': `true; @import "your-less-file-path.less";`, // Override with less file
+       },
+       javascriptEnabled: true,
+     },
    }],
    // ...other rules
  }],
  // ...other config
}