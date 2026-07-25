import { NavLink } from "react-router-dom";
import {
  SidebarContainer,
  Logo,
  Menu,
  MenuItem,
} from "./SidebarStyles";

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>CMS Admin</Logo>

      <Menu>
        <MenuItem>
          <NavLink to="/dashboard">🏠 Dashboard</NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="/pages">📄 Pages</NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink to="/pages/create">➕ Create Page</NavLink>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
}

export default Sidebar;