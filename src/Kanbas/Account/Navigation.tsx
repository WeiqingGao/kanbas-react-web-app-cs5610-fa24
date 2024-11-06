import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    return (
        <div id="wd-account-navigation" style={{ display: "flex", flexDirection: "column" }}>
            <NavLink to="/Kanbas/Account/Signin" id="wd-course-home-link"
                className="nav-link"
                style={({ isActive }) => ({
                    color: isActive ? "black" : "red",
                    borderLeft: isActive ? "2px solid black" : "none",
                    paddingLeft: "6px"
                })}> 
                Signin
            </NavLink>

            <NavLink to="/Kanbas/Account/Signup" id="wd-course-home-link"
                className="nav-link"
                style={({ isActive }) => ({
                    color: isActive ? "black" : "red",
                    borderLeft: isActive ? "2px solid black" : "none",
                    paddingLeft: "6px"
                })}> 
                Signup 
            </NavLink>

            <NavLink to="/Kanbas/Account/Profile" id="wd-course-home-link"
                className="nav-link"
                style={({ isActive }) => ({
                    color: isActive ? "black" : "red",
                    borderLeft: isActive ? "2px solid black" : "none",
                    paddingLeft: "6px"
                })}> 
                Profile 
            </NavLink>
        </div>
    );
}