import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
    return (
        <Provider store={store}>
            <div id="wd-labs">
                <h1>Weiqing Gao</h1>
                <h1>Labs</h1>
                <TOC />
                <Routes>
                    {/* "/" define the root path, the path when users input the base domain name */}
                    <Route path="/" element={<Navigate to="Lab1" />} />
                    {/* Lab1 define the root path followed by 'Lab1' */}
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2" element={<Lab2 />} />
                    {/* * is wildcard character, meaning that all paths started with Lab3 will match this route */}
                    <Route path="Lab3/*" element={<Lab3 />} />
                    <Route path="Lab4" element={<Lab4 />} />
                </Routes>
            </div>
        </Provider>
    );
}