function add(a: number, b: number) {
    return a + b;
}
// it can be called by this file only since it is not exported

export default function LegacyFunctions() {
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);
    return (
        <div id="wd-legacy-functions">
            <h4>Functions</h4>
            <h5>Legacy ES5 functions</h5>
            twoPlusFour = {twoPlusFour}
            <br />
            add(2, 4) = {add(2, 4)}
            <hr />
        </div>
    );
}