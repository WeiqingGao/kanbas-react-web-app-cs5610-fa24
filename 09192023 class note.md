# CSS
Like html, it is also a declaration language

inspection-style

user agent stylesheet
user agent is the browser, that is to say, the browser has its default style

there are many properties followed by their values
all css do is to overwrite these values


```css
element.style {
	font-size: 5em;
	
}
```

`<link href="/some/external/style/file.css" rel="stylesheet"/>`

一般的html style属性是一个string，但我们用的是high-level syntax，like 
```
<p style={{backgroundColor: "yellow"}}>
	This paragraph is yellow
</p>
这个就像一个function，或者说algorithm，用来修改该element的style
```

JavaScript and Typescript是新的语言，允许我们将html和css混着用，自然也就允许在html和css之间来回切换，这里的双大括号的作用就是从html切换到css
style attribute configures look and fell of specific HTML elements and is considered bad practice.
但是 style attribute，使用这个一般被认为是bad practice

我们也可以修改当前webpage的configure style，但也被认为是bad practice
用的是class
先用个.____作为identifier， 并规定该identifier特定的格式
在使用的时候使用该identifier作为className的element会设定为对应格式

naming convention, 
for css, we use dash "-", all lower case
for the attribute name,we use camel case, because it is javascript, same as java

Link element can apply same look and feel to multiple web page is considered gthe best practice


## Color
Basic styling
```javascript
<p style={{color:"blue"}}>
	Text can be colored and styled
</p>
/*这样的话是针对该界面所有的paragraph，如果想针对单独某一个paragraph，则可以*/
p#parargraph_id {
	background-color: rgb(0, 255, 26);
	color: black
}
/*因为id是unique的，所以可以用这种方法对individual进行style*/
```
这里仅仅是作为说明才style attribute，正常应该使用link

如何用link设置各种颜色
## Block vs inline element
Box model
margin > border > padding > content

heading和paragraph是block level的，所以在它们的tag后加的其它内容一定会换行，不论是否有足够的空间。包括对它们的背景颜色一类的设置，会应用于整个block而不会仅仅应用于实际内容所占用的空间
像是span就是inline的

一个小时的时候branch是怎么设置的

```javascript
<span 
	style={{
		backgroundColor: "red",
		color: "white",
		borderStyle: "solid",
		borderTopWidth: "20px",
		borderBottomWidth: "10px", 
	}}
```

通过div的id来进行style就是styling based on structure

ID selector vs. Document structure selector
 `.wd-selector-1 > .wd-selector-2`?
