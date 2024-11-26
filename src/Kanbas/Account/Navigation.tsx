import { NavLink } from "react-router-dom";

import "./Navigation.css"; 

export default function AccountNavigation() {
  /* const { currentUser } = useSelector((state: any) => state.accountReducer); */
  /* const links = currentUser ? ["Profile"] : ["Signin", "Signup"]; */
  /* const { pathname } = useLocation(); */

  return (
    <div id="wd-account-navigation" style={{ display: "flex", flexDirection: "column" }}>
      <NavLink
        to={`/Kanbas/Account/Signin`}
        id="wd-signin-link"
        className="nav-link"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px"
        })}
      >
        Signin
      </NavLink>
      <NavLink
        to={`/Kanbas/Account/Signup`}
        id="wd-signup-link"
        className="nav-link"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px"
        })}
      >
        Signup
      </NavLink>
      <NavLink
        to={`/Kanbas/Account/Profile`}
        id="wd-profile-link"
        className="nav-link"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px"
        })}
      >
        Profile
      </NavLink>
    </div>
  );
}