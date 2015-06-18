## CSS部分

### display:none和visibility:hidden的区别？
 

    display:none  隐藏对应的元素, 在文档布局中不再给它分配空间, 它各边的元素会合拢,
    就当他从来不存在。
    
    visibility:hidden  隐藏对应的元素, 但是在文档布局中仍保留原来的空间。

### CSS中 link 和@import 的区别是？
 

    A：(1) link属于HTML标签, 而@import是CSS提供的; (2) 页面被加载的时, link会同时被加载, 而@import引用的CSS会等到页面被加载完再加载;(3) import只在IE5以上才能识别, 而link是HTML标签, 无兼容问题; (4) link方式的样式的权重 高于@import的权重.
    
### position的absolute与fixed共同点与不同点    
    
    A：共同点：
    1.改变行内元素的呈现方式, display被置为block；2.让元素脱离普通流, 不占据空间；3.默认会覆盖到非定位元素上
    
    B不同点：
    absolute的”根元素“是可以设置的, 而fixed的”根元素“固定为浏览器窗口。当你滚动网页, fixed元素与浏览器窗口之间的距离是不变的。

### 介绍一下CSS的盒子模型？

1）有两种,  IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;
2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).

### CSS选择器有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

- CSS选择器 
>    1.id选择器（ # myid）
    2.类选择器（.myclassname）
    3.标签选择器（div, h1, p）
    4.相邻选择器（h1 + p）
    5.子选择器（ul > li）
    6.后代选择器（li a）
    7.通配符选择器（ * ）
    8.属性选择器（a[rel = "external"]）
    9.伪类选择器（a: hover, li:nth-child）

*   可继承的样式： font-size font-family color, text-indent;

*   不可继承的样式：border padding margin width height ;

*   优先级就近原则, 同权重情况下样式定义最近者为准;

*   载入样式以最后载入的定位为准;

- 优先级为
> 
!important >  id > class > tag  
important 比 内联优先级高,但内联比 id 要高

- CSS3新增伪类举例：
``` 
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled  :disabled 控制表单控件的禁用状态。
:checked        单选框或复选框被选中。
```

### css定义的权重

以下是权重的规则：标签的权重为1, class的权重为10, id的权重为100, 以下例子是演示各种定义的权重值：
```css    
    /*权重为1*/
    div{
    
    }
    /*权重为10*/
    .class1{
    
    }
    /*权重为100*/
    #id1{
    
    }
    /*权重为100+1=101*/
    #id1 div{
    
    }
    /*权重为10+1=11*/
    .class1 div{
    
    }
    /*权重为10+10+1=21*/
    .class1 .class2 div{
    
    } 
```     
如果权重相同, 则最后定义的样式会起作用, 但是应该避免这种情况出现

### 列出display的值, 说明他们的作用。position的值,  relative和absolute分别是相对于谁进行定位的？

1.  display的值 
block 象块类型元素一样显示。
inline 缺省值。象行内元素类型一样显示。
inline-block 象行内元素一样显示, 但其内容象块类型元素一样显示。
list-item 象块类型元素一样显示, 并添加样式列表标记。

2. relative和absolute相对谁进行定位? 
* absolute 
    生成绝对定位的元素, 相对于 static 定位以外的第一个祖先元素进行定位。

* fixed （老IE不支持）
    生成绝对定位的元素, 相对于浏览器窗口进行定位。

* relative 
    生成相对定位的元素, 相对于其在普通流中的位置进行定位。

* static  默认值。没有定位, 元素出现在正常的流中
*（忽略 top, bottom, left, right z-index 声明）。

* inherit 规定从父元素继承 position 属性的值。

### CSS3有哪些新特性？

CSS3实现圆角（border-radius）, 阴影（box-shadow）,
对文字加特效（text-shadow、）, 线性渐变（gradient）, 旋转（transform）
transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
增加了更多的CSS选择器  多背景 rgba 
在CSS3中唯一引入的伪元素是::selection.
媒体查询, 多栏布局
border-image
  
### 为什么要初始化CSS样式。


因为浏览器的兼容问题, 不同浏览器对有些标签的默认值是不同的, 如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

当然, 初始化样式会对SEO有一定的影响, 但鱼和熊掌不可兼得, 但力求影响最小的情况下初始化。

- 最简单的初始化方法就是： `* {padding: 0; margin: 0;}` （不建议）

- 淘宝的样式初始化： 
``` css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; } 
```

### 解释下 CSS sprites, 以及你要如何在页面或网站中使用它。

CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中, 再利用CSS的“background-image”, “background- repeat”, “background-position”的组合进行背景定位, background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销, 因为请求耗时比较长；请求虽然可以并发, 但是也有限制, 一般浏览器都是6个。对于未来而言, 就不需要这样做了, 因为有了`http2`。

### 常见兼容性问题？

* png24位的图片在iE6浏览器上出现背景, 解决方案是做成PNG8.也可以引用一段脚本处理.

* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

* IE6双边距bug:块属性标签float后, 又有横行的margin情况下, 在ie6显示margin比设置的大。

* 浮动ie产生的双倍距离（IE6双边距问题：在IE6下, 如果对元素设置了浮动, 同时又设置了margin-left或margin-right, margin值会加倍。）
`#box{ float:left; width:10px; margin:0 0 0 100px;}` 

这种情况之下IE会产生20px的距离, 解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

*  渐进识别的方式, 从总体中逐渐排除局部。

首先, 巧妙的使用“\9”这一标记, 将IE游览器从所有情况中分离出来。
接着, 再次使用“+”将IE8和IE7、IE6分离开来, 这样IE8已经独立识别。

```css
  .bb{
   background-color:#f1ee18;/*所有识别*/
  .background-color:#00deff\9; /*IE6、7、8识别*/
  +background-color:#a200ff;/*IE6、7识别*/
  _background-color:#1e0bd1;/*IE6识别*/ 
  } 
``` 

*  IE下,可以使用获取常规属性的方法来获取自定义属性,
也可以使用getAttribute()获取自定义属性;
Firefox下,只能使用getAttribute()获取自定义属性. 
解决方法:统一通过getAttribute()获取自定义属性.

* IE下,event对象有x,y属性,但是没有pageX,pageY属性; 
Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.

* 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 
可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

* 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
L-V-H-A : ``` a:link {} a:visited {} a:hover {} a:active {} ```

* 怪异模式问题：漏写DTD声明, Firefox仍然会按照标准模式来解析网页, 但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦, 最好养成书写DTD声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：`<doctype html>`

* 上下margin重合问题
ie和ff都存在, 相邻的两个div的margin-left和margin-right不会重合, 但是margin-top和margin-bottom却会发生重合。
解决方法, 养成良好的代码编写习惯, 同时采用margin-top或者同时采用margin-bottom。
* ie6对png图片格式支持不好(引用一段脚本处理)

### 解释下浮动和它的工作原理？清除浮动的技巧

浮动元素脱离文档流, 不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

1.使用空标签清除浮动。
   这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。
2.使用overflow。
   给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。
3.使用after伪对象清除浮动。
   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0, 否则该元素会比实际高出若干像素；

### 浮动元素引起的问题和解决办法？

    浮动元素引起的问题：
    （1）父元素的高度无法被撑开, 影响与父元素同级的元素
    （2）与浮动元素同级的非浮动元素会跟随其后
    （3）若非第一个元素浮动, 则该元素之前的元素也需要浮动, 否则会影响页面显示的结构
解决方法：
使用`CSS`中的`clear:both`;属性来清除元素的浮动可解决2、3问题, 对于问题1, 添加如下样式, 给父元素添加`clearfix`样式：

    .clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
    .clearfix{display: inline-block;} /* for IE/Mac */

**清除浮动的几种方法：**

    1, 额外标签法, <div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
    2, 使用after伪类

    #parent:after{
        content:".";
        height:0;
        visibility:hidden;
        display:block;
        clear:both;
        }
    
    3,浮动外部元素
    4,设置`overflow`为`hidden`或者auto

### IE8以下版本的浏览器中的盒模型有什么不同

IE8以下浏览器的盒模型中定义的元素的宽高不包括内边距和边框

### 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

FOUC - Flash Of Unstyled Content 文档样式闪烁
<style type="text/css" media="all">@import "../fouc.css";</style> 
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM, 然后再去导入外部的CSS文件, 因此, 在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的, 这段时间的长短跟网速, 电脑速度都有关系。
解决方法简单的出奇, 只要在<head>之间加入一个<link>或者<script>元素就可以了。
