const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack  = require('webpack')
module.exports = {
  resolve:{ 
    extensions:['.wasm','.mjs','.js','.jsx','.json'] // 不想写后缀的文件
  },
  entry:path.resolve(__dirname,'src/index.jsx'),
  module:{
    rules:[
      {
        test:/\.jsx?/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            babelrc:false, //不要去别的地方再去找babel的规则了，在这里就添加完了
            presets:[
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env',{modules:false})] // modules:false?
            ],
            // cacheDirectory:true, //是否对每次编译的结果做缓存，项目小忽略
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'src/index.html'),
      filename:'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // HMR
  devServer:{
    hot:true
  }
}