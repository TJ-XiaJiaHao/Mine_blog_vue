### **1、环境配置**
创建Vue项目需要node和npm支持，如果已经安装过了请跳过此步骤  

	1、node环境配置：
		下载地址：https://nodejs.org/en/download/
		下载后双击安装程序就可以了
	2、npm环境：
		最新版的node已经集成了npm，也不需要额外安装了
	3、测试：在cmd中输入如下命令，如果出现版本号则说明配置成功
		node -v
		npm  -v
### **2、让Vue跑起来**
我们使用webpack来帮助我们建立Vue项目，打开cmd，依次输入如下命令

	1、npm install -g vue-cli		//全局安装vue-cli
	2、vue init webpack project-name	//在文件夹中创建一个基于"webpack"模板的新项目
	3、cd project-name				//进入项目目录
	4、npm install                   //安装依赖包
	5、npm run dev				    //运行，默认需要8080端口，结果如下
得到的运行结果应该如下：
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/init.png?raw=true)
### **3、项目目录结构介绍**
	1、src/assets：存放静态文件，一般是组件中用到的文件，如图片，自定义的样式等
	2、src/components：存放所有的组件，通过vue-loader加载
	3、src/router：存放路由
	4、src/App.vue：App组件，被index.html调用
	5、static文件夹：存放静态文件，一般是一些官方的文件，如bootstrap、jquery等
	6、src/main.js：项目入口文件
	7、index.html：最后真正显示在浏览器的网页
	调用关系：index.html->main.js->APP.vue->vue集合（通过vue-loader实现）
### **4、让Webstorm支持Vue语法**
如果你是一个前端开发师，那么你对webstorm必定不陌生，但是webstorm默认是不支持vue语法的，用webstorm打开vue项目也会大面积爆红，下面通过一些设置来使webstorm支持vue语法

- 1、File/Setting/Languages & Frameworks/javascripts，选择ES6，点击apply
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/setES6.png?raw=true)
- 2、File/Editor/File Types，选择HTML，添加*.vue，点击Apply（高亮vue语法）
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/setHtml.png?raw=true)
- 3、FIle->Setting->Plugins->Browse repositories->搜索vue->下载，vue支持配置成功
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/setVue.png?raw=true)

