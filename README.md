cloud-ui
===

## 环境依赖:
- node v4.x+ (官网下载地址:http://nodejs.org)

## 运行
1. 安装 `nodejs`
1. 全局安装 `npm`: npm install -g
1. 全局安装 `gulp`: npm install gulp -g
1. 在项目中安装 `gulp`: npm install gulp --save-dev
1. 安装 `gulpfile` 文件中的插件: npm install gulp-util gulp-watch-path stream-combiner2 gulp-sourcemaps gulp-minify-css gulp-autoprefixer gulp-less gulp-rename gulp-clean --save-dev
1. 运行gulp任务: `gulp watch`  监听文件改动实时生成css文件  `gulp build`  编译生成css文件和css的压缩文件

## 目录结构及文件
    <pre>
        └─cloudUI
            ├─dist         ---> 生成目录
            │  ├─css
            │  └─fonts
            ├─src          ---> 开发目录
            │  ├─fonts
            │  └─less
            └─docs         ---> 文档目录
                ├─css
                ├─js
                ├─less
                ├─component.html
                ├─start.html
                └─style.html
    </pre>

------------

**cloudUI**:

**node_modules**: npm 工具目录

**dist**: 优化压缩后的交付目录

**src**: 开发目录

**docs**: 文档目录

**gulpfile.js**: 自动化构建脚本

**package.json**: 项目信息

License
-------

