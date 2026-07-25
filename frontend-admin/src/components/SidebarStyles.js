import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background: #1e293b;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px 20px;
  box-sizing: border-box;
`;

export const Logo = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 15px;

  a {
    display: block;
    padding: 14px 18px;
    border-radius: 10px;
    color: #cbd5e1;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    transition: 0.3s;
  }

  a:hover {
    background: #334155;
    color: white;
  }

  a.active {
    background: #2563eb;
    color: white;
  }
`;