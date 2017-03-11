var webpack = require('webpack');
var vue = require('vue-loader')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
  
module.exports = {
    //插件项
    plugins: [
        new ExtractTextPlugin("[name].css")
        //代码进行压缩
        ,new webpack.optimize.UglifyJsPlugin({  
		      compress: {
		        warnings: false
		      },
		      sourceMap:false
		    })
    ],
    //页面入口文件配置
    entry: {
        index : './src/main.js'
    },
    //入口文件输出配置
    output: {
        path: './dist/',
        publicPath:"./dist/",    //进行文件分离，进行懒加载
        chunkFilename:"[id]_file.js",  ///?[chunkhash]
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("css!less") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass") },
            { test: /\.js$/, loader: "babel",query: {presets: ['es2015']},exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue'},
            {
				      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				      loader: 'file?limit=8192&name=images/[hash:8].[name].[ext]'
			      }
        ]
    },
    vue : {
      loaders: {
        //css: ExtractTextPlugin.extract("css"),
        /*less: ExtractTextPlugin.extract("css!less"),
        sass: ExtractTextPlugin.extract("css!sass")*/
      },
      autoprefixer: { browsers: ["ios_saf >= 7", "android >= 4"] }
    },
    resolve:{
			// require时省略的扩展名，遇到.vue结尾的也要去加载
		    extensions: ['','.js', '.vue'],
		    // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
		    root:"../node_modules",
		    alias:{
		        'vue':'vue/dist/vue.min.js',
		        'element-ui':'element-ui/lib/index.js',
		        'vueRouter':'vue-router/dist/vue-router.min.js',
		        'vueResource':'vue-resource/dist/vue-resource.min.js'
		    }
		}
};