export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    {/* the content inside the return is JSX code, which is using to
      define the rendering structure of React component; while outside 
      the return is where we place the logic part, to declare variables 
      and computation. 
      The rendering process of a React components is
        Execute function body block that contains all business logic and the 
          JSX return value 
        Generate JSX components by return statement, these JSX components
          describe the structure and content of the page
        Rendering result, which is the final UI component returnted by React
          component, typically it is the DOM component rendered by React based 
          on JSX.  it represents what users finally see.
      */}
    return(
      <div id="wd-variables-and-constants">
        <h4>Variables and Constants</h4>
        functionScoped = { functionScoped }<br/>
        blockScoped = { blockScoped }<br/>
        constant1 = { constant1 }<hr/>
      </div>
   );
}
