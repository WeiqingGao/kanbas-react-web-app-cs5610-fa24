JSON format: JavaScript Object Notation

**Instead of changing styles within HTML, it is a best practice to do all styling configuration in separate CSS files and then import the files.**

The CSS rules we are writing are overriding the default styling of the elements the rules refer to. That means that there are at least two rules that apply to the same element, the default rule declared by the browser, and then our rule that overrides the default rule. Our rules wins out over the default rule, but why?
The Cascading in Cascading Style Sheets refer to the way CSS rules are applied to HTML elements based on a hierarchy of specificity and origin. This mechanism determines how styles are applied when there are multiple style rules that could affect an element. Here’s how it works:
1. Specificity: CSS rules are applied based on their specificity. This is a measure of how precise a selector is. More specific selectors override more general ones. For example, an ID selector is more specific than a class selector, and a class selector is more specific than a tag name selector.
2. Source Order: If multiple rules have the same specificity, the last rule defined in the CSS will take precedence.
3. Inheritance: Some styles are inherited by child elements from their parent elements, such as font styles. However, properties like width and margin are not inherited.

# Selector
## ID Selector

## Class Selector

## Document Structure Selector


# Color
Colors can be defined as follows
- ●  As strings, e.g., white, red, blue, etc
- ●  As hexadecimals, e.g., \#ABCDEF
- ●  As RGB, e.g., rgb(12, 34, 56)
e.g.

`.the-sun { color: rgb(255,255,0); }`
`.the-sky { color: blue; }`
`.ketchup { color: #FF0000; }`

## Foreground Color
## Background Color
```css
/* foreground color */
.wd-fg-color-black { color: black; }
.wd-fg-color-white { color: white; }
.wd-fg-color-blue { color: #7070ff; }
.wd-fg-color-red { color: #ff7070; }
.wd-fg-color-green { color: green; }

/* background color */
.wd-bg-color-yellow { background-color: #ffff07; }
.wd-bg-color-blue { background-color: #7070ff; }
.wd-bg-color-red { background-color: #ff7070; }
.wd-bg-color-green { background-color: green; }
.wd-bg-color-gray { background-color: lightgray; }
```
应用于html element时，命名className为对应的颜色名
```tsx
<h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
```

# Border

# Margin & Padding