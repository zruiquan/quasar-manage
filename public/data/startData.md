## 快速起步
项目基于 [quasar-cli](http://www.quasarchs.com/start/quasar-cli)

目录结构
```sh
src
 |-assets			     # 静态文件
 |-axios			     # 自定义 axois
 |-components 		     # 全局组件
 |-layouts			     # 主布局文件
 |-router		  	     # 路由配置
 |-store			     # 全局状态
 |-utils			     # 工具类
 |-pages			     # 视图组件
 |-css			         # 全局 css
 |-boot			         # 自定义启动文件
   |-permission.js       # 鉴权文件
   |-manage.config.js    # 项目配置文件
 |-src-electron		     # electron 配置文件
 |-quasar.conf.js        # quasar 配置文件
```

1、根据需要对```manage.config.js```中的项目配置进行修改

2、弄清楚路由守卫如何工作及鉴权
:::tip
个人认为代码是最好的老师，看代码比看图理解的快 ヽ(ー_ー)ノ  [代码地址](https://github.com/972784674t/quasar-manage/blob/master/src/boot/permission.js)
相信不同的项目有不同逻辑操作，所以并没有把权限判断代码写得太详细
:::

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201119170329453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxOTEyMzk4,size_16,color_FFFFFF,t_70#pic_center)
3、所有视图组件都请使用```<BaseContent>```作为根元素，因为在```<BaseContent>```做了缓存处理、滚动位置记录以及不同屏幕尺寸的适配，而且能使页面的滚动区域保持在特定的范围内

:::tip
当然，越是精确的组件复用性越差，如果能根据```<BaseContent>```（说明文档在：[滚动区域](#/component/scrollDemo)），封装一个更适合自己的组件，就再好不过了。
:::

做了这些事情基本可以愉快的使用项目了，现在在看的这个项目集展示和说明文档为一身，所以最好使用模板项目来进行开发哦

如果想深入了解可以查看后续的说明文档
