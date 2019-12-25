

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/output/` // 出力するディレクトリ階層

  }, 
  module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
   ]
  }
}