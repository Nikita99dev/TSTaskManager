import { Link } from "react-router-dom";
import { StyledHeader, StyledNav } from "../styles/Header.styled";

export default function HeaderMain() {
  return (
    <StyledHeader>
      <StyledNav>
          <Link to="/A">Todos</Link>
          <Link to="/A">Login</Link>
          <Link to="/signUp">SignUp</Link>
      </StyledNav>
    </StyledHeader>
  );
}
