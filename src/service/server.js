const webpack=require('webpack')
const webpackConfig=require('./build/webpack.config')

webpack(webpackConfig,function(err,stats){
if(err) throw err
//输出打包信息（不用在意这些细节）
 process.stdout.write(stats.toString({
     colors: true,
     modules: false,
     children: false,
     chunks: false,
     chunkModules: false
 }) + '\n\n')
})