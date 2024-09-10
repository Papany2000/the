import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/goods">Склад</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
};
export default Header;