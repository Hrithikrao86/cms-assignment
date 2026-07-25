import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 20px;
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Heading = styled.h2`
  font-size: 42px;
  text-align: center;
  color: #111827;
  margin-bottom: 15px;
`;

export const SubHeading = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 60px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0,0,0,.08);
  transition: .3s;

  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(37,99,235,.18);
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
`;

export const Title = styled.h3`
  margin: 25px 0 15px;
  color: #111827;
`;

export const Description = styled.p`
  color: #6b7280;
  line-height: 1.8;
`;