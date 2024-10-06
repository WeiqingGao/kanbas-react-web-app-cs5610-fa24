export default function VariableTypes() {
    {/* JavaScript is dynamic language, which means the data types of variables are 
        dynamic. The data type of a variable can change automatically based on the 
        value of this variable. Thus, we don't need to explicitly declare the data type */}
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    // typeof is used to return the date type of a variable
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;

    return(
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariable = { numberVariable }<br/>
            floatingPointNumber = { floatingPointNumber }<br/>
            stringVariable = { stringVariable }<br/>
            booleanVariable = { booleanVariable + "" }<br/>
            isNumber = { isNumber }<br/>
            isString = { isString }<br/>
            isBoolean = { isBoolean }<hr/>
        </div>
    );
}