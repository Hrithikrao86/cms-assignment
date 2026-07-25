import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width:100%;
`;

export const Title = styled.h2`
  margin: 0;
  color: #1e293b;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const User = styled.span`
  color: #555;
  font-weight: 600;
`;

export const LogoutBtn = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
`;