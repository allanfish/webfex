## HTML部分

###  请你谈谈Cookie的弊端
-----------------
`cookie`虽然在持久保存客户端数据提供了方便, 分担了服务器存储的负担, 但还是有很多局限性的。
第一：每个特定的域名下最多生成20个`cookie`

    1.IE6或更低版本最多20个cookie
    2.IE7和之后的版本最后可以有50个cookie。
    3.Firefox最多50个cookie
    4.chrome和Safari没有做硬性限制

`IE`和`Opera` 会清理近期最少使用的`cookie`, `Firefox`会随机清理`cookie`。

`cookie`的最大大约为`4096`字节, 为了兼容性, 一般不能超过`4095`字节。

IE 提供了一种存储可以持久化用户数据, 叫做`uerData`, 从`IE5.0`就开始支持。每个数据最多128K, 每个域名下最多1M。这个持久化数据放在缓存中, 如果缓存没有清理, 那么会一直存在。


- 优点：极高的扩展性和可用性

    1.通过良好的编程, 控制保存在cookie中的session对象的大小。
    2.通过加密和安全传输技术（SSL）, 减少cookie被破解的可能性。
    3.只在cookie中存放不敏感数据, 即使被盗也不会有重大损失。
    4.控制cookie的生命期, 使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

- 缺点：
    1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie, 每个cookie长度不能超过4KB, 否则会被截掉。
    2.安全性问题。如果cookie被人拦截了, 那人就可以取得所有的session信息。即使加密也与事无补, 因为拦截者并不需要知道cookie的意义, 他只要原样转发cookie就可以达到目的了。
    3.有些状态不可能保存在客户端。例如, 为了防止重复提交表单, 我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端, 那么它起不到任何作用。

### 浏览器本地存储

在较高版本的浏览器中, `js`提供了`sessionStorage`和`globalStorage`。在`HTML5`中提供了`localStorage`来取代`globalStorage`。

`html5`中的`Web Storage`包括了两种存储方式：`sessionStorage`和`localStorage`。

`sessionStorage`用于本地存储一个会话（session）中的数据, 这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此`sessionStorage`不是一种持久化的本地存储, 仅仅是会话级别的存储。

而`localStorage`用于持久化的本地存储, 除非主动删除数据, 否则数据是永远不会过期的。

### web storage和cookie的区别

`Web Storage`的概念和`cookie`相似, 区别是它是为了更大容量存储设计的。`Cookie`的大小是受限的, 并且每次你请求一个新的页面的时候`Cookie`都会被发送过去, 这样无形中浪费了带宽, 另外`cookie`还需要指定作用域, 不可以跨域调用。

除此之外, `Web Storage`拥有`setItem,getItem,removeItem,clear`等方法, 不像`cookie`需要前端开发者自己封装`setCookie, getCookie`。

但是`Cookie`也是不可以或缺的：`Cookie`的作用是与服务器进行交互, 作为`HTTP`规范的一部分而存在 , 而`Web Storage`仅仅是为了在本地“存储”数据而生

浏览器的支持除了`IE７`及以下不支持外, 其他标准浏览器都完全支持(ie及FF需在web服务器里运行), 值得一提的是IE总是办好事, 例如IE7、IE6中的`UserData`其实就是`javascript`本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持`web storage`。

`localStorage`和`sessionStorage`都具有相同的操作方法, 例如`setItem、getItem`和`removeItem`等

### 说说你对语义化的理解？

    1, 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
    2, 有利于SEO：和搜索引擎建立良好沟通, 有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
    3, 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
    4, 便于团队开发和维护, 语义化更具可读性, 是下一步吧网页的重要动向, 遵循W3C标准的团队都遵循这个标准, 可以减少差异化。
    
### Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?    

（1）、<!DOCTYPE> 声明位于文档中的最前面, 处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。

（2）、严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。

（3）、在混杂模式中, 页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

（4）、DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 

### 你知道多少种Doctype文档类型？

     该标签可声明三种 DTD 类型, 分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
     HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
     XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
    Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页, 而 Quirks
     （包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

### HTML与XHTML——二者有什么区别

1.所有的标记都必须要有一个相应的结束标记
2.所有标签的元素和属性的名字都必须使用小写
3.所有的XML标记都必须合理嵌套
4.所有的属性必须用引号""括起来
5.把所有<和&特殊符号用编码表示
6.给所有属性赋一个值
7.不要在注释内容中使“--”
8.图片必须有说明文字

### 对BFC规范的理解？

BFC, 块级格式化上下文, 一个创建了新的BFC的盒子是独立布局的, 盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。（W3C CSS 2.1 规范中的一个概念, 它决定了元素如何对其内容进行布局, 以及与其他元素的关系和相互作用）

### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。 

（1）创建新节点

createDocumentFragment()    //创建一个DOM片段
createElement()   //创建一个具体的元素
createTextNode()   //创建一个文本节点

（2）添加、移除、替换、插入

appendChild()
removeChild()
replaceChild()
insertBefore() //在已有的子节点前插入一个新的子节点

（3）查找

getElementsByTagName()    //通过标签名称
getElementsByName()    //通过元素的Name属性的值(IE容错能力较强, 会得到一个数组, 其中包括id等于name值的)
getElementById()    //通过元素Id, 唯一性

### html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

* HTML5 现在已经不是 SGML 的子集, 主要是关于图像, 位置, 存储, 多任务等功能的增加。

* 拖拽释放(Drag and drop) API 
语义化更好的内容标签（header,nav,footer,aside,article,section）
音频、视频API(audio,video)
画布(Canvas) API
地理(Geolocation) API
本地离线存储 localStorage 长期存储数据, 浏览器关闭后数据不丢失；
sessionStorage 的数据在浏览器关闭后自动删除

表单控件, calendar、date、time、email、url、search
新的技术webworker, websocket, Geolocation

* 移除的元素

纯表现的元素：basefont, big, center, font, s, strike, tt, u；

对可用性产生负面影响的元素：frame, frameset, noframes；

支持HTML5新标签：

* IE8/IE7/IE6支持通过document.createElement方法产生的标签,
可以利用这一特性让这些浏览器支持HTML5新标签,

浏览器支持新标签后, 还需要添加标签默认的样式：

* 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
 <!--[if lt IE 9]> 
 <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script> 
 <![endif]--> 
如何区分： DOCTYPE声明\新增的结构元素\功能元素

### iframe的优缺点？

1.<iframe>优点：

    解决加载缓慢的第三方内容如图标和广告等的加载问题
    Security sandbox
    并行加载脚本

2.<iframe>的缺点：
 

    *iframe会阻塞主页面的Onload事件；
    
    *即时内容为空, 加载也需要时间
    *没有语意 

### 如何实现浏览器内多个标签页之间的通信?

调用localstorge、cookies等本地存储方式
    

### webSocket如何兼容低浏览器？

Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR

### documen.write和 innerHTML的区别

document.write只能重绘整个页面, innerHTML可以重绘页面的一部分

