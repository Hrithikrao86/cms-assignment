import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #111827;
  color: white;
  padding: 70px 20px 25px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const Logo = styled.h2`
  color: #3b82f6;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #d1d5db;
  line-height: 1.8;
`;

export const Heading = styled.h3`
  margin-bottom: 20px;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 12px;

  a {
    text-decoration: none;
    color: #d1d5db;
    transition: 0.3s;
  }

  a:hover {
    color: #60a5fa;
  }
`;

export const Bottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 20px;
  text-align: center;
  color: #9ca3af;
`;