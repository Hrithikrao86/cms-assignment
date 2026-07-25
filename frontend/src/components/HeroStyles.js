import styled from "styled-components";

export const HeroSection = styled.section`
  min-height:90vh;

  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;

  background:linear-gradient(
      135deg,
      #eff6ff,
      #ffffff,
      #dbeafe
  );

  padding:40px;
`;

export const Content = styled.div`
  max-width:800px;
`;

export const Badge = styled.div`
  display:inline-block;
  background:#dbeafe;
  color:#2563eb;
  padding:8px 18px;
  border-radius:50px;
  font-weight:600;
`;

export const Title = styled.h1`
  font-size:64px;
  line-height:1.1;
  color:#111827;
  margin:25px 0;

  @media(max-width:768px){
    font-size:42px;
  }
`;

export const Subtitle = styled.p`
  font-size:22px;
  color:#6b7280;
  line-height:1.8;
`;

export const Buttons = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:45px;

  @media(max-width:768px){
    flex-direction:column;
  }
`;

export const PrimaryButton = styled.button`
  background:#2563eb;
  color:white;
  border:none;
  padding:16px 34px;
  border-radius:12px;
  font-size:18px;
  cursor:pointer;

  &:hover{
    background:#1d4ed8;
  }
`;

export const SecondaryButton = styled.button`
  background:white;
  color:#2563eb;
  border:2px solid #2563eb;
  padding:16px 34px;
  border-radius:12px;
  font-size:18px;
  cursor:pointer;
`;