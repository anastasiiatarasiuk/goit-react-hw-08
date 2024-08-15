import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.links}>
      <NavLink to="/register" className={s.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.link}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
