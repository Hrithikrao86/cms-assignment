import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  max-width: none;
`;

export const Header = styled.div`
  margin-bottom: 35px;
`;

export const Heading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #1f2937;
`;

export const SubHeading = styled.p`
  color: #6b7280;
  margin-top: 6px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`;

export const CardInfo = styled.div`
  display:flex;
  flex-direction:column;
`;

export const CardTitle = styled.p`
  color: gray;
  margin:0;
`;

export const CardValue = styled.h2`
  margin-top:8px;
  font-size:34px;
`;

const Icon = styled.div`
  width:70px;
  height:70px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:28px;
`;

export const IconBlue = styled(Icon)`
  background:#e0ecff;
  color:#2563eb;
`;

export const IconGreen = styled(Icon)`
  background:#dcfce7;
  color:#16a34a;
`;

export const IconOrange = styled(Icon)`
  background:#fef3c7;
  color:#d97706;
`;

export const SectionTitle = styled.h2`
  margin-top:45px;
  margin-bottom:20px;
`;

export const ButtonContainer = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
`;

const Button = styled.button`
  border:none;
  border-radius:10px;
  padding:15px 28px;
  font-size:16px;
  font-weight:600;
  color:white;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:10px;
  transition:.3s;

  &:hover{
    transform:translateY(-3px);
  }
`;

export const PrimaryButton = styled(Button)`
  background:#2563eb;
`;

export const SecondaryButton = styled(Button)`
  background:#16a34a;
`;

export const LogoutButton = styled(Button)`
  background:#ef4444;
`;