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
