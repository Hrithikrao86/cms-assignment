import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0,0,0,.08);
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  font-size: 30px;
  font-weight: 800;

  a{
    color:#2563eb;
    text-decoration:none;
  }
`;

export const Menu = styled.ul`
  display:flex;
  align-items:center;
  gap:35px;
  list-style:none;

  @media(max-width:768px){
    display:none;
  }
`;

export const MenuItem = styled.li`
  a{
    text-decoration:none;
    color:#374151;
    font-weight:600;
    transition:.3s;
  }

  a:hover{
    color:#2563eb;
  }
`;

export const Button = styled.a`
  background:#2563eb;
  color:white;
  text-decoration:none;
  padding:12px 24px;
  border-radius:10px;
  font-weight:600;
  transition:.3s;

  &:hover{
    background:#1d4ed8;
  }

  @media(max-width:768px){
    display:none;
  }
`;