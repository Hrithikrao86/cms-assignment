import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 14px;
  padding: 35px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

export const Heading = styled.h1`
  font-size: 32px;
  color: #1f2937;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const TextArea = styled.textarea`
  min-height: 220px;
  padding: 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  resize: vertical;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const Select = styled.select`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

export const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;
