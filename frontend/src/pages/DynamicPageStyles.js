import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 70px auto;
  padding: 20px;
`;

export const Card = styled.div`
  background: white;
  padding: 50px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
`;

export const Title = styled.h1`
  color: #111827;
  margin-bottom: 25px;
  font-size: 42px;
`;

export const Content = styled.div`
  font-size: 18px;
  color: #4b5563;
  line-height: 2;
  white-space: pre-wrap;
`;

export const Loading = styled.div`
  padding: 150px;
  text-align: center;
  font-size: 24px;
`;

export const Error = styled.div`
  padding: 150px;
  text-align: center;

  h1 {
    font-size: 90px;
    color: #ef4444;
  }

  p {
    font-size: 22px;
    color: #6b7280;
  }
`;