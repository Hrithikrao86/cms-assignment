import styled from "styled-components";

export const Hero = styled.section`
  text-align:center;
  padding:120px 20px;
`;

export const Title = styled.h1`
  font-size:56px;
  color:#1f2937;
`;

export const Subtitle = styled.p`
  margin-top:20px;
  font-size:20px;
  color:#6b7280;
`;

export const Button = styled.button`
  margin-top:40px;
  background:#2563eb;
  color:white;
  border:none;
  padding:15px 35px;
  border-radius:10px;
  cursor:pointer;
  font-size:18px;

  &:hover{
    background:#1d4ed8;
  }
`;