import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import {
  FooterContainer,
  Wrapper,
  Top,
  Column,
  Logo,
  Description,
  Heading,
  List,
  Item,
  Bottom,
} from "./FooterStyles";

function Footer() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await api.get("/pages/published");
      setPages(res.data.pages);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FooterContainer>
      <Wrapper>
        <Top>
          <Column>
            <Logo>CMS</Logo>

            <Description>
              A modern Content Management System built with React,
              Express, MongoDB and JWT Authentication.
            </Description>
          </Column>

          <Column>
            <Heading>Pages</Heading>

            <List>
              {pages.map((page) => (
                <Item key={page._id}>
                  <Link to={`/${page.slug}`}>
                    {page.title}
                  </Link>
                </Item>
              ))}
            </List>
          </Column>

          <Column>
            <Heading>Technologies</Heading>

            <List>
              <Item>React</Item>
              <Item>Express</Item>
              <Item>MongoDB</Item>
              <Item>JWT Authentication</Item>
            </List>
          </Column>
        </Top>

        <Bottom>
          © {new Date().getFullYear()} CMS Website. All Rights Reserved.
        </Bottom>
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;