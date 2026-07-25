import { useNavigate } from "react-router-dom";
import {
  Nav,
  Title,
  Right,
  User,
  LogoutBtn,
} from "./NavbarStyles";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Nav>
      <Title>CMS Dashboard</Title>

      <Right>
        <User>Admin</User>

        <LogoutBtn onClick={logout}>
          Logout
        </LogoutBtn>
      </Right>
    </Nav>
  );
}

export default Navbar;