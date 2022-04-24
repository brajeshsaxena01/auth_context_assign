import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <nav
      style={{
        border: "1px solid darkblue",
        height: "40px"
      }}
    >
      <button>{isAuth ? "Logout" : "Login"}</button>
    </nav>
  );
};
