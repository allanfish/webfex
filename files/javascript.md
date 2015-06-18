## JAVASCRIPT部分

### null和undefined的区别？

`null`是一个表示"无"的对象, 转为数值时为0；`undefined`是一个表示"无"的原始值, 转为数值时为`NaN`。  
  
当声明的变量还未被初始化时, 变量的默认值为`undefined`。
`null`用来表示尚未存在的对象, 常用来表示函数企图返回一个不存在的对象。 

`undefined`表示"缺少值", 就是此处应该有一个值, 但是还没有定义。典型用法是：

（1）变量被声明了, 但没有赋值时, 就等于undefined。

（2) 调用函数时, 应该提供的参数没有提供, 该参数等于undefined。

（3）对象没有赋值的属性, 该属性的值为undefined。

（4）函数没有返回值时, 默认返回undefined。

`null`表示"没有对象", 即该处不应该有值。典型用法是：

（1） 作为函数的参数, 表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

### new操作符具体干了什么呢?

1、创建一个空对象, 并且 this 变量引用该对象, 同时还继承了该函数的原型。
2、属性和方法被加入到 this 引用的对象中。
3、新创建的对象由 this 所引用, 并且最后隐式的返回 this 。

```
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj); 
```


### JSON 的了解？

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
`{'age':'12', 'name':'back'}`

### js延迟加载的方式有哪些？

defer和async、动态创建DOM方式（创建script, 插入到DOM中, 加载完毕后callBack）、按需异步载入js

### 如何解决跨域问题?

jsonp、 document.domain+iframe、window.name、window.postMessage、服务器上设置代理页面
        
jsonp的原理是动态插入script标签
 
### .call() 和 .apply() 的区别和作用？

作用：动态改变某个类的某个方法的运行环境。
区别参见：[JavaScript学习总结（四）function函数部分](http://segmentfault.com/a/1190000000660786#articleHeader15)

### 哪些操作会造成内存泄漏？

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象, 并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象）, 或对该对象的惟一引用是循环的, 那么该对象的内存即可回收。

setTimeout 的第一个参数使用字符串而非函数的话, 会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时, 就会产生一个循环）

详见：[详解js变量、作用域及内存](http://segmentfault.com/a/1190000000687844)

### JavaScript中的作用域与变量声明提升？

详见：[详解JavaScript函数模式](http://segmentfault.com/a/1190000000758184#articleHeader5)

### 如何判断当前脚本运行在浏览器还是node环境中？

通过判断Global对象是否为window, 如果不为window, 当前脚本没有运行在浏览器中
  
### javascript对象的几种创建方式

1. 工厂模式
2. 构造函数模式
3. 原型模式
4. 混合构造函数和原型模式
5. 动态原型模式
6. 寄生构造函数模式
7. 稳妥构造函数模式

### javascript继承的6种方法

1. 原型链继承
2. 借用构造函数继承
3. 组合继承(原型+借用构造)
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承

详情：[JavaScript继承方式详解][8]

### ajax过程

1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象.
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
3. 设置响应HTTP请求状态变化的函数.
4. 发送HTTP请求.
5. 获取异步调用返回的数据.
6. 使用JavaScript和DOM实现局部刷新.

详情：[JavaScript学习总结（七）Ajax和Http状态字][9]

### 异步加载和延迟加载

1. 异步加载的方案： 动态插入script标签
2. 通过ajax去获取js代码, 然后通过eval执行
3. script标签上添加defer或者async属性
4. 创建并插入iframe, 让它异步执行js
5. 延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的, 而稍后的某些情况才需要的。

### javascript里面的继承怎么实现, 如何避免原型链上面的对象共享

用构造函数和原型链的混合模式去实现继承
避免对象共享可以参考经典的extend()函数, 很多前端框架都有封装的, 就是用一个空函数当做中间变量

### WEB应用从服务器主动推送Data到客户端有那些方式？

### ie各版本和chrome可以并行下载多少个资源

IE6 两个并发, iE7升级之后的6个并发, 之后版本也是6个, Firefox, chrome也是6个

### js对象的深度克隆

```js
  function clone(Obj) {   
        var buf;   
        if (Obj instanceof Array) {   
            buf = [];  //创建一个空的数组 
            var i = Obj.length;   
            while (i--) {   
                buf[i] = clone(Obj[i]);   
            }   
            return buf;   
        }else if (Obj instanceof Object){   
            buf = {};  //创建一个空对象 
            for (var k in Obj) {  //为这个对象添加新的属性 
                buf[k] = clone(Obj[k]);   
            }   
            return buf;   
        }else{   
            return Obj;   
        }   
    }  
```     

### 如何获取UA？

```
<script> 
    function whatBrowser() {  
        document.Browser.Name.value=navigator.appName;  
        document.Browser.Version.value=navigator.appVersion;  
        document.Browser.Code.value=navigator.appCodeName;  
        document.Browser.Agent.value=navigator.userAgent;  
    }  
</script>
```

### js数组去重

以下是数组去重的三种方法：
```
Array.prototype.unique1 = function () {
  var n = []; //一个新的临时数组
  for (var i = 0; i < this.length; i++) //遍历当前数组
  {
    //如果当前数组的第i已经保存进了临时数组, 那么跳过, 
    //否则把当前项push到临时数组里面
    if (n.indexOf(this[i]) == -1) n.push(this[i]);
  }
  return n;
}

Array.prototype.unique2 = function()
{
  var n = {},r=[]; //n为hash表, r为临时数组
  for(var i = 0; i < this.length; i++) //遍历当前数组
  {
    if (!n[this[i]]) //如果hash表中没有当前项
    {
      n[this[i]] = true; //存入hash表
      r.push(this[i]); //把当前数组的当前项push到临时数组里面
    }
  }
  return r;
}

Array.prototype.unique3 = function()
{
  var n = [this[0]]; //结果数组
  for(var i = 1; i < this.length; i++) //从第二项开始遍历
  {
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i, 
    //那么表示第i项是重复的, 忽略掉。否则存入结果数组
    if (this.indexOf(this[i]) == i) n.push(this[i]);
  }
  return n;
}
```

### ajax 是什么? ajax 的交互模型? 同步和异步的区别? 如何解决跨域问题?

详情请见：[JavaScript学习总结（七）Ajax和Http状态字][13]  

- Ajax的优点 

1. 通过异步模式, 提升了用户体验
2. 优化了浏览器和服务器之间的传输, 减少不必要的数据往返, 减少了带宽占用
3. Ajax在客户端运行, 承担了一部分本来由服务器承担的工作, 减少了大用户量下的服务器负载。

    
- Ajax的最大的特点是什么
    
Ajax可以实现动态不刷新（局部刷新）
readyState属性 状态 有5个可取值： 0=未初始化 , 1=启动 2=发送, 3=接收, 4=完成

- ajax的缺点
    
1、ajax不支持浏览器back按钮。
2、安全问题 AJAX暴露了与服务器交互的细节。
3、对搜索引擎的支持比较弱。
4、破坏了程序的异常机制。
5、不容易调试。
    
跨域： jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面



### AMD和CMD 规范的区别？

详情请见：[详解JavaScript模块化开发][14] 

### WEB应用从服务器主动推送Data到客户端有那些方式？

html5 websoket
WebSocket通过Flash
XHR长时间连接
XHR Multipart Streaming
不可见的Iframe
<script>标签的长时间连接(可跨域)

### 事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。  
2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型, 也就是：捕获型事件和冒泡型事件。；
3.  ev.stopPropagation();注意旧ie的方法 ev.cancelBubble = true;

### JavaScript原型, 原型链 ? 有什么特点？

*  原型对象也是普通的对象, 是对象一个自带隐式的 __proto__ 属性, 原型也有可能有自己的原型, 如果一个原型对象的原型不为null的话, 我们就称之为原型链。
*  原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链。

**嵌入`JS`应该放在什么位置?**

 1、放在底部, 虽然放在底部照样会阻塞所有呈现, 但不会阻塞资源下载。
 2、如果嵌入JS放在head中, 请把嵌入JS放在CSS头部。
 3、使用defer（只支持IE）
 4、不要在嵌入的JS中调用运行时间较长的函数, 如果一定要用, 可以用`setTimeout`来调用

### Javascript无阻塞加载具体方式

- **将脚本放在底部。**`<link>`还是放在`head`中, 用以保证在`js`加载前, 能加载出正常显示的页面。`<script>`标签放在`</body>`前。
- **成组脚本**：由于每个`<script>`标签下载时阻塞页面解析过程, 所以限制页面的`<script>`总数也可以改善性能。适用于内联脚本和外部脚本。
- **非阻塞脚本**：等页面完成加载后, 再加载`js`代码。也就是, 在`window.onload`事件发出后开始下载代码。
（1）`defer`属性：支持IE4和`fierfox3.5`更高版本浏览器
（2）动态脚本元素：文档对象模型（DOM）允许你使用js动态创建`HTML`的几乎全部文档内容。代码如下：

``` js
<script>
var script=document.createElement("script");
script.type="text/javascript";
script.src="file.js";
document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

**此技术的重点在于:** 

无论在何处启动下载, 文件额下载和运行都不会阻塞其他页面处理过程。即使在head里（除了用于下载文件的http链接）。   
    
### 闭包相关问题？

详情请见：[详解js闭包][11]
    
### js事件处理程序问题？

详情请见：[JavaScript学习总结（九）事件详解][12]
    
### eval是做什么的？

它的功能是把对应的字符串解析成JS代码并运行. 应该避免使用eval, 不安全, 非常耗性能（2次, 一次解析成js语句, 一次执行）。

### 写一个通用的事件侦听器函数?

``` js
// event(事件)工具集, 来源：github.com/markyun
markyun.Event = {
    // 页面加载完成后
    readyEvent : function(fn) {
        if (fn==null) {
            fn=document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fn;
        } else {
            window.onload = function() {
                oldonload();
                fn();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent : function(element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function() {
                handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent : function(element, type, handler) {
        if (element.removeEnentListener) {
            element.removeEnentListener(type, handler, false);
        } else if (element.datachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }, 
    // 阻止事件 (主要是事件冒泡, 因为IE不支持事件捕获)
    stopPropagation : function(ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            ev.cancelBubble = true;
        }
    },
    // 取消事件的默认行为
    preventDefault : function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget : function(event) {
        return event.target || event.srcElement;
    },
    // 获取event对象的引用, 取到事件的所有信息, 确保随时能使用event；
    getEvent : function(e) {
        var ev = e || window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;
    }
}; 
``` 

### 哪些地方会出现css阻塞, 哪些地方会出现js阻塞？

**js的阻塞特性：** 

所有浏览器在下载`JS`的时候, 会阻止一切其他活动, 比如其他资源的下载, 内容的呈现等等。直到`JS`下载、解析、执行完毕后才开始继续`并行下载`其他资源并呈现内容。为了提高用户体验, 新一代浏览器都支持并行下载`JS`, 但是`JS`下载仍然会阻塞其它资源的下载（例如.图片, css文件等）。

由于浏览器为了防止出现`JS`修改`DOM`树, 需要重新构建`DOM`树的情况, 所以就会阻塞其他的下载和呈现。

嵌入`JS`会阻塞所有内容的呈现, 而外部`JS`只会阻塞其后内容的显示, 2种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外部脚本的加载, 但会阻塞外部脚本的执行。

`CSS`怎么会阻塞加载了？`CSS`本来是可以并行下载的, 在什么情况下会出现阻塞加载了(在测试观察中, `IE6`下`CSS`都是阻塞加载）

当`CSS`后面跟着嵌入的`JS`的时候, 该`CSS`就会出现阻塞后面资源下载的情况。而当把嵌入`JS`放到`CSS`前面, 就不会出现阻塞的情况了。

**根本原因:** 

因为浏览器会维持`html`中`css`和`js`的顺序, 样式表必须在嵌入的JS执行前先加载、解析完。而嵌入的`JS`会阻塞后面的资源加载, 所以就会出现上面`CSS`阻塞下载的情况。
 

### Flash、Ajax各自的优缺点, 在使用中如何取舍？

1、Flash ajax对比
Flash适合处理多媒体、矢量图形、访问机器；对CSS、处理文本上不足, 不容易被搜索。
Ajax对CSS、文本支持很好, 支持搜索；多媒体、矢量图形、机器访问不足。
共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM


### 请解释一下 JavaScript 的同源策略。

概念:同源策略是客户端脚本（尤其是`Javascript`）的重要的安全度量标准。它最早出自`Netscape Navigator2.0`, 其目的是防止某个文档或脚本从多个不同源装载。

这里的同源策略指的是：协议, 域名, 端口相同, 同源策略是一种安全协议。
指一段脚本只能读取来自同一来源的窗口和文档的属性。

### 为什么要有同源限制？

我们举例说明：比如一个黑客程序, 他利用`Iframe`把真正的银行登录页面嵌到他的页面上, 当你使用真实的用户名, 密码登录时, 他的页面就可以通过`Javascript`读取到你的表单中`input`中的内容, 这样用户名, 密码就轻松到手了。

### 什么是 "use strict"; ? 使用它的好处和坏处分别是什么？

`ECMAscript 5`添加了第二种运行模式："严格模式"（strict mode）。顾名思义, 这种模式使得`Javascript`在更严格的条件下运行。


设立"严格模式"的目的, 主要有以下几个：

  - 消除Javascript语法的一些不合理、不严谨之处, 减少一些怪异行为;
  - 消除代码运行的一些不安全之处, 保证代码运行的安全；
  - 提高编译器效率, 增加运行速度；
  - 为未来新版本的Javascript做好铺垫。

注：经过测试`IE6,7,8,9`均不支持严格模式。

- 缺点：
现在网站的`JS` 都会进行压缩, 一些文件用了严格模式, 而另一些没有。这时这些本来是严格模式的文件, 被 `merge` 后, 这个串就到了文件的中间, 不仅没有指示严格模式, 反而在压缩后浪费了字节。
 

### this的用途

1. 纯粹的函数调用, 此时this代表全局对象Global
```js
var x = 1;
function test(){
    this.x = 0 ;

    alert("this.x:"+ this.x);
    alert("x: " + x)
}

test();
```

2. 作为对象方法的调用
3. 作为构造函数调用, this指向新创建的对象
4. apply()和call()调用, this执行绑定的对象
