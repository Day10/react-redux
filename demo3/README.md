### webpack+react 手写build命令代码。
遇到问题
* path.join(__dirname)是此代码所在文件的路径
* 用path.join(),可以兼容linux和window，因为一个路径是斜杠一个是反斜杠
* babel-loader和babel-core 有些版本匹配的问题，babel-loader@7.X与babel-core@6.X匹配，不然报错
* 配置loaders时，js那块要把node_modules去掉