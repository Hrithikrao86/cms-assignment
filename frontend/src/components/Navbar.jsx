import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import {
  Nav,
  Container,
  Logo,
  Menu,
  MenuItem,
  Button,
} from "./NavbarStyles";

function Navbar() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
     const res = await api.get("/pages/published");

setPages(res.data.pages);

     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Nav>
      <Container>
        <Logo>
          <Link to="/">CMS</Link>
        </Logo>

        <Menu>
          {pages.map((page) => (
            <MenuItem key={page._id}>
              <Link to={`/${page.slug}`}>
                {page.title}
              </Link>
            </MenuItem>
          ))}
        </Menu>

        <Button as={Link} to="/">
  Home
</Button>
      </Container>
    </Nav>
  );
}

export default Navbar;