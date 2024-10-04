import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function AccountNavigation() {
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