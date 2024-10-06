import BooleanVariables from "./BooleanVariables";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

export default function Lab3() {
    return (
        <div id="wd-lab3" className="container-flud">
            <h2>Lab 3</h2>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
            <FindFunction/>
            
            <FilterFunction/>
            
        </div>
    );
}