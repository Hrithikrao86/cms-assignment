import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f7fb;
  padding: 20px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: #1e293b;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
`;

export const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1d4ed8;
  }
`;